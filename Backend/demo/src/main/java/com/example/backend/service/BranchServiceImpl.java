package com.example.backend.service;

import com.example.backend.dao.BranchDao;
import com.example.backend.models.Branch;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BranchServiceImpl implements BranchService{

    private final BranchDao branchDao;

    public BranchServiceImpl(BranchDao branchDao) {
        this.branchDao = branchDao;
    }


    @Override
    public List<Branch> getAllBranch() {
        return branchDao.getBranch();
    }
}
