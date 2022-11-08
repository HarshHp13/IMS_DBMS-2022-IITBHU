package com.example.backend.service;

import com.example.backend.dao.PolicyDao;
import com.example.backend.models.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PolicyServiceImpl implements PolicyService{

    private final PolicyDao policyDao;

    PolicyServiceImpl(PolicyDao policyDao){
        this.policyDao=policyDao;
    }

    @Override
    public List<Policy> getPolicies() {
        return policyDao.getPolicies();
    }

    @Override
    public Policy getPolicyById(int id) {
        return policyDao.getPolicyById(id);
    }

    @Override
    public void applyPolicy(int policy_id, int user_id) {
        policyDao.setPolicyApproval(policy_id,user_id);
    }

    @Override
    public Policy_Approval getApproval(int policy_id, int user_id) {
        return policyDao.getApproval(policy_id,user_id);
    }

    @Override
    public void updateApproval(int policy_id, int user_id, int agent_id, int status) {
        policyDao.updateApproval(policy_id,user_id,agent_id,status);
    }

    @Override
    public List<Approval> getAllApproval(int user_id) {
        return policyDao.getAllApproval(user_id);
    }

    @Override
    public List<Approved> getAllApproved(int user_id) {
        return policyDao.getAllApproved(user_id);
    }

    @Override
    public Approved_Policy getApproved(int user_id, int policy_id) {
        return policyDao.getApproved(user_id,policy_id);
    }
}
