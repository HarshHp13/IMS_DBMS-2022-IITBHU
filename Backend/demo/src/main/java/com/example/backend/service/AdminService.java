package com.example.backend.service;

import com.example.backend.models.Admin_info;
import com.example.backend.models.Agent_info;

public interface AdminService {

    Admin_info getAdminByEmail(String email);
}
