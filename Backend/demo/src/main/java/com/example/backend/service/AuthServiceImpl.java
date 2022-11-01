package com.example.backend.service;

import com.example.backend.dao.AuthDao;
import com.example.backend.models.Auth;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service @Transactional
public class AuthServiceImpl implements AuthService, UserDetailsService {
    private final PasswordEncoder passwordEncoder;
    private final AuthDao authDao;


    AuthServiceImpl(PasswordEncoder passwordEncoder, AuthDao authDao){
        this.passwordEncoder=passwordEncoder;
        this.authDao = authDao;
    }

    @Override
    public Auth saveAuth(Auth auth) {
        auth.setPassword(passwordEncoder.encode(auth.getPassword()));
        authDao.saveAuth(auth.getUsername(), auth.getPassword(), auth.getRoles());
        return auth;
    }


    @Override
    public void addRoleToAuth(String username, String roleName) {
        System.out.println("impl");
        authDao.addRoleToAuth(username,roleName);
    }

    @Override
    public Auth getAuth(String username) {
        return authDao.findUserByUsername(username);
    }

    @Override
    public List<Auth> getAuths() {
        return (List<Auth>) authDao.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Auth auth = authDao.findUserByUsername(username);
        if(auth ==null){
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found in database");
        }
        else{

        }
        Collection<SimpleGrantedAuthority> authorities=new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(auth.getRoles()));
        return new User(auth.getUsername(), auth.getPassword(), authorities);
    }
}
