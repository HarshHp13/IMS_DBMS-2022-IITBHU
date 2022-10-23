package com.example.demo;

import com.example.demo.dao.UserRepositry;
import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class DemoApplication {
	@Autowired
	private static ApplicationContext context;

	public static void main(String[] args) {

		context=SpringApplication.run(DemoApplication.class, args);


//		User user= new User();
//		user.setId(1);
//		user.setAge(21);
//		user.setEmail("harsh.pratik.ces20@itbhu.ac.in");
//		user.setName("Harsh Pratik");
//		user.setIncome(1000000);
//
//		User user1=userRepositry.save(user);
//		System.out.println(user1);


	}



//	@Bean
//	public WebMvcConfigurer configure() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry reg) {
//				reg.addMapping("/**").allowedOrigins("http://localhost:3000").allowedMethods("*").allowedHeaders("*").allowCredentials(true);
//			}
//		};
//
//	}
}
