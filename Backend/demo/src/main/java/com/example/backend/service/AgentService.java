package com.example.backend.service;

import com.example.backend.models.Agent_info;
import com.example.backend.models.User_info;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface AgentService {
    Agent_info getAgentById(int id);
    void updateApproved(String email);

    List<Agent_info> getAllAgents(int branch_id);
    void deleteAgent(int agent_id);
    Agent_info getAgentByEmail(String email);

    Agent_info saveAgent(Agent_info agent, int auth_id);
}
