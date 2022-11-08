package com.example.backend.service;

import com.example.backend.models.Agent_info;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface AgentService {
    Agent_info getAgentById(int id);
    void updateApproved(String email);

    Agent_info getAgentByEmail(String email);
}
