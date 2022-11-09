package com.example.backend.models;

import java.time.LocalDate;

public class AgentCurr {
    public AgentCurr() {
    }
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
    private int id;
    private byte[] image;

    private String first_name;
    private String last_name;
    private String date_of_birth;
    private int age;
    private String email;
    private String house;
    private String street;
    private String city;
    private String state;
    private String zipcode;
    private int income;
    private String profession;
    private int referrals;
    private String gender;
    private String marital_status;
    private String signUp_date;

    private int referred_by; //foreign key pointing User
    private int branch_id; //foreign key pointing Branch
    //    private int agent_id; //foreign key pointing Agent
    private int auth_id;

    private int premium_count;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

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

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public int getReferrals() {
        return referrals;
    }

    public void setReferrals(int referrals) {
        this.referrals = referrals;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMarital_status() {
        return marital_status;
    }

    public void setMarital_status(String marital_status) {
        this.marital_status = marital_status;
    }

    public String getSignUp_date() {
        return signUp_date;
    }

    public void setSignUp_date(String signUp_date) {
        this.signUp_date = signUp_date;
    }

    public int getReferred_by() {
        return referred_by;
    }

    public void setReferred_by(int referred_by) {
        this.referred_by = referred_by;
    }

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }

    public int getAuth_id() {
        return auth_id;
    }

    public void setAuth_id(int auth_id) {
        this.auth_id = auth_id;
    }

    public int getPremium_count() {
        return premium_count;
    }

    public void setPremium_count(int premium_count) {
        this.premium_count = premium_count;
    }
}

// p.*, ui.*, ap.premium_count