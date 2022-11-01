package com.example.backend.service;

import com.example.backend.models.Auth;

import java.util.List;

public interface AuthService {
    Auth saveAuth(Auth auth);
    void addRoleToAuth(String username, String roleName);
    Auth getAuth(String username);
    List<Auth> getAuths();
}
