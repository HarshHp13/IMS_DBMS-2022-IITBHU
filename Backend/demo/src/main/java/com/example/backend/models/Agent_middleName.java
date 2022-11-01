package com.example.backend.models;

public class Agent_middleName {
    private int agent_id;
    private String middle_name;

    Agent_middleName(int agent_id, String middle_name){
        this.agent_id = agent_id;
        this.middle_name = middle_name;
    }

    public int getAdmin_id() {
        return agent_id;
    }

    public void setAgent_id(int agent_id) {
        this.agent_id = agent_id;
    }

    public String getMiddle_name() {
        return middle_name;
    }

    public void setMiddle_name(String middle_name) {
        this.middle_name = middle_name;
    }
}
