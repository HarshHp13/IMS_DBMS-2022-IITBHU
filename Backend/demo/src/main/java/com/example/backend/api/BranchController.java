package com.example.backend.api;

import com.example.backend.models.Branch;
import com.example.backend.service.BranchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/branch")
public class BranchController {

    private final BranchService branchService;

    public BranchController(BranchService branchService) {
        this.branchService = branchService;
    }

    @GetMapping("/list")
    public List<Branch> getBranches(){
        return branchService.getAllBranch();
    }

}
