package com.example.backend.service;

import com.example.backend.dao.AgentDao;
import com.example.backend.models.Agent_info;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AgentServiceImpl implements AgentService {

    private final AgentDao agentDao;

    AgentServiceImpl(AgentDao agentDao){
        this.agentDao=agentDao;
    }

    @Override
    public void updateApproved(String email) {
        agentDao.updateApproved(email);
    }

    @Override
    public Agent_info getAgentByEmail(String email) {
        return agentDao.getAgentByEmail(email);
    }

    @Override
    public Agent_info getAgentById(int id){ return agentDao.getAgentById(id);}
}
