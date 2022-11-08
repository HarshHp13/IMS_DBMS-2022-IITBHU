package com.example.backend.service;

import com.example.backend.models.Auth;
import com.example.backend.models.User_info;

import java.util.List;

public interface UserService {
    User_info saveUser(User_info user, int auth_id);
    User_info getUser(String username);
    User_info getUserByAuthId(int id);
    List<User_info> getUsers();
}
