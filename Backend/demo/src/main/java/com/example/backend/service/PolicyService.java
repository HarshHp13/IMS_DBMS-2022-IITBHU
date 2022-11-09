package com.example.backend.service;

import com.example.backend.models.*;

import java.util.List;

public interface PolicyService {
    List<Policy> getPolicies();
    Policy getPolicyById(int id);

    void applyPolicy(int policy_id, int user_id);

    Policy_Approval getApproval(int policy_id, int user_id);

    void updateApproval(int policy_id, int user_id, int agent_id, int status);

    List<Approval> getAllApproval(int user_id);

    List<Approved> getAllApproved(int user_id);

    Approved_Policy getApproved(int user_id, int policy_id);

    void updateApproved(int user_id, int policy_id);

    List<AgentReq> requestedPoliciesForAgent(int agent_id);
    List<AgentCurr> currentPoliciesForAgent(int agent_id);
}
