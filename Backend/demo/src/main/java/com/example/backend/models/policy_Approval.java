package com.example.backend.models;

import java.time.LocalDate;

public class policy_Approval {
    private int policy_approval_id;
    private LocalDate policy_approval_date;
    private int policy_id;
    private int user_id;
    private int agent_id;

    public int getPolicy_approval_id() {
        return policy_approval_id;
    }

    public void setPolicy_approval_id(int policy_approval_id) {
        this.policy_approval_id = policy_approval_id;
    }

    public LocalDate getPolicy_approval_date() {
        return policy_approval_date;
    }

    public void setPolicy_approval_date(LocalDate policy_approval_date) {
        this.policy_approval_date = policy_approval_date;
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
