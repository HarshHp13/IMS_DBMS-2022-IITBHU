package com.example.backend.service;

import com.example.backend.dao.AuthDao;
import com.example.backend.dao.UserDao;
import com.example.backend.models.Auth;
import com.example.backend.models.User_info;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service @Transactional
public class UserServiceImpl implements UserService {

    private final UserDao userDao;

    UserServiceImpl(UserDao userDao){
        this.userDao = userDao;
    }


    @Override
    public User_info saveUser(User_info user,int auth_id) {
        userDao.saveUser(
                user.getFirst_name(),
                user.getLast_name(),
                user.getDate_of_birth(),
                user.getEmail(),
                user.getHouse(),
                user.getStreet(),
                user.getMarital_status(),
                user.getCity(),
                user.getState(),
                user.getZipcode(),
                user.getIncome(),
                user.getProfession(),
                user.getGender(),
//                user.getSignUp_date(),
                user.getReferred_by(),
                user.getBranch_id(),
                user.getAge(),
                user.getReferrals(),
                auth_id
        );
        return user;
    }

    @Override
    public User_info getUser(String username) {
        return userDao.findUserByUsername(username);
    }

    @Override
    public User_info getUserByAuthId(int id) {
        return userDao.findUserByAuthId(id);
    }

    @Override
    public List<User_info> getUsers() {
        return userDao.findAll();
    }
}
