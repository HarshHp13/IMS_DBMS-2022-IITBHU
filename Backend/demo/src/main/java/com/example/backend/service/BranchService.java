package com.example.backend.service;

import com.example.backend.models.Branch;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BranchService {
    List<Branch> getAllBranch();
}
