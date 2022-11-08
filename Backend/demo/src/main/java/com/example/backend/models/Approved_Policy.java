package com.example.backend.models;

public class Approved_Policy {
    private int policy_id;
    private int user_id;
    private int agent_id;
    private int premium_count;
    private boolean claimed;

    public Approved_Policy() {
    }

    public Approved_Policy(int policy_id, int user_id, int agent_id, int premium_count, boolean claimed) {
        this.policy_id = policy_id;
        this.user_id = user_id;
        this.agent_id = agent_id;
        this.premium_count = premium_count;
        this.claimed = claimed;
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

    public int getPremium_count() {
        return premium_count;
    }

    public void setPremium_count(int premium_count) {
        this.premium_count = premium_count;
    }

    public boolean isClaimed() {
        return claimed;
    }

    public void setClaimed(boolean claimed) {
        this.claimed = claimed;
    }
}
