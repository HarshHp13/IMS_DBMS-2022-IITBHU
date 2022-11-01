package com.example.backend.api;

import com.example.backend.models.Policy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PolicyController {

    @GetMapping("/policy/list")
    public List<Policy> listPolicy(){
        List<Policy> policies=new ArrayList<>();
        policies.add(new Policy("abcd",1234));
        policies.add(new Policy("abcde",12345));
        policies.add(new Policy("abcdef",123456));
        return policies;
    }

}
