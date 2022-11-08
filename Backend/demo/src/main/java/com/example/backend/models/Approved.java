package com.example.backend.models;

import java.time.LocalDate;

public class Approved {
    private int policy_id;
    private String policy_name;
    private int tenure;
    private String policy_description;
    private int premium;
    private int life_cover;
    private LocalDate policy_creation_date;
    private String policy_type;
    private int min_age;
    private int max_age;
    private String occupation;
    private int user_id;
    private int agent_id;
    private String first_name;
    private String last_name;
    private int premium_count;
    private boolean claimed;

    public Approved(){}

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
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

    public int getPolicy_id() {
        return policy_id;
    }

    public void setPolicy_id(int policy_id) {
        this.policy_id = policy_id;
    }

    public String getPolicy_name() {
        return policy_name;
    }

    public void setPolicy_name(String policy_name) {
        this.policy_name = policy_name;
    }

    public int getTenure() {
        return tenure;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }

    public String getPolicy_description() {
        return policy_description;
    }

    public void setPolicy_description(String policy_description) {
        this.policy_description = policy_description;
    }

    public int getPremium() {
        return premium;
    }

    public void setPremium(int premium) {
        this.premium = premium;
    }

    public int getLife_cover() {
        return life_cover;
    }

    public void setLife_cover(int life_cover) {
        this.life_cover = life_cover;
    }

    public LocalDate getPolicy_creation_date() {
        return policy_creation_date;
    }

    public void setPolicy_creation_date(LocalDate policy_creation_date) {
        this.policy_creation_date = policy_creation_date;
    }

    public String getPolicy_type() {
        return policy_type;
    }

    public void setPolicy_type(String policy_type) {
        this.policy_type = policy_type;
    }

    public int getMin_age() {
        return min_age;
    }

    public void setMin_age(int min_age) {
        this.min_age = min_age;
    }

    public int getMax_age() {
        return max_age;
    }

    public void setMax_age(int max_age) {
        this.max_age = max_age;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

}
