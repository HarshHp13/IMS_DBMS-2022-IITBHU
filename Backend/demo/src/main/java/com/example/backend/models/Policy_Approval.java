package com.example.backend.models;

public class Policy_Approval {
    private String policy_approval_date;
    private String policy_request_date;
    private int policy_id;
    private int user_id;
    private int agent_id;

    private int status;

    public Policy_Approval() {
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getPolicy_approval_date() {
        return policy_approval_date;
    }

    public void setPolicy_approval_date(String policy_approval_date) {
        this.policy_approval_date = policy_approval_date;
    }

    public String getPolicy_request_date() {
        return policy_request_date;
    }

    public void setPolicy_request_date(String policy_request_date) {
        this.policy_request_date = policy_request_date;
    }

    public int getPolicy_id() {
        return policy_id;
    }

    public void setPolicy_id(int policy_id) {
        this.policy_id = policy_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getAgent_id() {
        return agent_id;
    }

    public void setAgent_id(int agent_id) {
        this.agent_id = agent_id;
    }
}
