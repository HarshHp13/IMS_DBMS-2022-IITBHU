package com.example.backend.service;

import com.example.backend.dao.AdminDao;
import com.example.backend.models.Admin_info;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

    private final AdminDao adminDao;

    public AdminServiceImpl(AdminDao adminDao) {
        this.adminDao = adminDao;
    }


    @Override
    public Admin_info getAdminByEmail(String email) {
        return adminDao.getAdminByEmail(email);
    }
}
