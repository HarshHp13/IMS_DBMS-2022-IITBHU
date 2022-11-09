package com.example.backend.service;

import com.example.backend.dao.AgentDao;
import com.example.backend.models.Agent_info;
import com.example.backend.models.User_info;
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
    public List<Agent_info> getAllAgents(int branch_id) {
        return agentDao.getAllAgents(branch_id);
    }

    @Override
    public void deleteAgent(int agent_id) {
        agentDao.deleteAgent(agent_id);
    }

    @Override
    public Agent_info getAgentByEmail(String email) {
        return agentDao.getAgentByEmail(email);
    }

    @Override
    public Agent_info saveAgent(Agent_info agent, int auth_id) {
        agentDao.saveAgent(
                agent.getFirst_name(),
                agent.getLast_name(),
                agent.getDate_of_birth(),
                agent.getEmail(),
                agent.getHouse(),
                agent.getStreet(),
                agent.getCity(),
                agent.getState(),
                agent.getZipcode(),
                agent.getGender(),
                agent.getBranch_id(),
                auth_id
        );
        return agent;
    }


    @Override
    public Agent_info getAgentById(int id){ return agentDao.getAgentById(id);}
}
