package com.example.backend.api;


import com.example.backend.models.Admin_info;
import com.example.backend.models.Agent_info;
import com.example.backend.service.AdminService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(value = {"http://localhost:3000" , "http://localhost:3001"},allowCredentials = "true")

@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/getAdmin")
    Admin_info getAgent(){
        Authentication auth= SecurityContextHolder.getContext().getAuthentication();
        Admin_info a=adminService.getAdminByEmail(auth.getName());
        return a;
    }
}
