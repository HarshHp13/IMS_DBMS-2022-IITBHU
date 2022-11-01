package com.example.backend.models;

public class Agent_phone {
    private int agent_id;
    private String phone;

    Agent_phone(int agent_id, String phone){
        this.agent_id = agent_id;
        this.phone = phone;
    }

    public int getAgent_id() {
        return agent_id;
    }

    public void setAgent_id(int agent_id) {
        this.agent_id = agent_id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
