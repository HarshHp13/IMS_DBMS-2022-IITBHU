package com.example.backend.config;

import com.example.backend.filter.CustomAuthenticationFilter;
import com.example.backend.filter.CustomAuthorizationFilter;
//import org.hibernate.internal.FilterConfiguration;
import com.example.backend.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.server.authentication.logout.DelegatingServerLogoutHandler;
import org.springframework.security.web.server.authentication.logout.SecurityContextServerLogoutHandler;
import org.springframework.security.web.server.authentication.logout.WebSessionServerLogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;
    private final UserService userService;
    public SecurityConfiguration(UserDetailsService userDetailsService,PasswordEncoder passwordEncoder, UserService userService){
        this.userDetailsService=userDetailsService;
        this.passwordEncoder=passwordEncoder;
        this.userService=userService;
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
//        http.csrf().disable();
//        http.authorizeRequests().antMatchers("/signUp**").permitAll().antMatchers("/**").permitAll().anyRequest().authenticated();
        http.formLogin();
//        http.httpBasic();

        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.authorizeRequests().antMatchers("/login/**").permitAll();
        http.authorizeRequests().antMatchers("/logout/**").permitAll();
        http.authorizeRequests().antMatchers("/signUp/**").permitAll();
        http.authorizeRequests().antMatchers("/auth/**").permitAll();
        http.authorizeRequests().antMatchers("/policy/list/**").permitAll();
        http.authorizeRequests().antMatchers("/branch/list/**").permitAll();
        http.authorizeRequests().antMatchers("/refreshToken/**").permitAll();
        http.logout().permitAll();
        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(new CustomAuthenticationFilter(authenticationManagerBean(),userService));
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);

    }


    @Override
    protected void configure(@NotNull AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication().withUser("Harsh").password(passwordEncoder.encode("harsh@hp13")).authorities("ADMIN");
            auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }


    @Bean
    public FilterRegistrationBean coresFilter(){
//        ArrayList<String> expHead=new ArrayList<>();
//
//        expHead.add("access_token");
//        expHead.add("refresh_token");
//        expHead.add("Authorization");


        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();

        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.addAllowedOriginPattern("http://localhost:3000");
//        corsConfiguration.addAllowedHeader("*");
//        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.addAllowedHeader("Authorization");
        corsConfiguration.addAllowedHeader("Content-type");
        corsConfiguration.addAllowedHeader("Accept");
        corsConfiguration.addAllowedMethod("POST");
        corsConfiguration.addAllowedMethod("GET");
        corsConfiguration.addAllowedMethod("PUT");
        corsConfiguration.addAllowedMethod("DELETE");
        corsConfiguration.addAllowedMethod("OPTIONS");
        corsConfiguration.addAllowedHeader("access_token");
        corsConfiguration.addAllowedHeader("refresh_token");
        corsConfiguration.addExposedHeader("access_token");
        corsConfiguration.addExposedHeader("refresh_token");
        corsConfiguration.setMaxAge(3600L);

        source.registerCorsConfiguration("/**", corsConfiguration);

        FilterRegistrationBean bean=new FilterRegistrationBean(new CorsFilter(source));
        bean.setOrder(0);

        return bean;
    }
}
