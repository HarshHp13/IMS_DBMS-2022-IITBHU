package com.example.backend.models;

import java.time.LocalDate;
import java.time.Period;

public class User_info {
    private int id;
    private String first_name;
    private String last_name;
    private LocalDate date_of_birth;
    private int age;
    private String email;
    private String house;
    private String street;
    private String landmark;
    private String city;
    private String state;
    private String zipcode;
    private int income;
    private String profession;
    private int referrals;
    private String gender;
    private LocalDate signUp_date;
    private int referred_by; //foreign key pointing User
    private int branch_id; //foreign key pointing Branch
//    private int agent_id; //foreign key pointing Agent

    public User_info(){}

    public User_info(int id, String first_name, String last_name, LocalDate date_of_birth, int age, String email, String house, String street, String landmark, String city, String state, String zipcode, int income, String profession, int referrals, String gender, LocalDate signUp_date, int referred_by, int branch_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.age = age;
        this.email = email;
        this.house = house;
        this.street = street;
        this.landmark = landmark;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.income = income;
        this.profession = profession;
        this.referrals = referrals;
        this.gender = gender;
        this.signUp_date = signUp_date;
        this.referred_by = referred_by;
        this.branch_id = branch_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(LocalDate date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public int getAge() {
        return age;
    }

    public void updateAge(int age) {
        if(date_of_birth != null)
            age = Period.between(date_of_birth, LocalDate.now()).getYears();
    }

    public int getReferrals() {
        return referrals;
    }

    public void incrementReferrals(){
        referrals++;
    }

    // public void setReferrals(int referrals) {
    //     this.referrals = referrals;
    // }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getLandmark(){
        return landmark;
    }

    public void setLandmark(String landmark){
        this.landmark = landmark;
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

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public int getReferred_by() {
        return referred_by;
    }

    public void setReferred_by(int referred_by) {
        this.referred_by = referred_by;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getSignUp_date() {
        return signUp_date;
    }

    public void setSignUp_date(LocalDate signUp_date) {
        this.signUp_date = signUp_date;
    }

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }
}
