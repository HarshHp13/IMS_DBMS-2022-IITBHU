package com.example.backend.models;

import java.time.LocalDate;

public class Policy {
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

    public Policy(int policy_id, String policy_name, int tenure, String policy_description, int premium, int life_cover, LocalDate policy_creation_date, String policy_type, int min_age, int max_age, String occupation) {
        this.policy_id = policy_id;
        this.policy_name = policy_name;
        this.tenure = tenure;
        this.policy_description = policy_description;
        this.premium = premium;
        this.life_cover = life_cover;
        this.policy_creation_date = policy_creation_date;
        this.policy_type = policy_type;
        this.min_age = min_age;
        this.max_age = max_age;
        this.occupation = occupation;
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
