package com.example.backend.models;

import java.time.Period;

public class Agent_info {
    private int id;
    private String first_name;
    private String last_name;
    private String date_of_birth;
    private int age;
    private String email;
    private int no_of_policies;
    private String street;
    private String house;
    private String landmark;
    private String city;
    private String state;
    private String zipcode;
    private String gender;

    private int branch_id; // Foreign key pointing Branch he is working for

    public Agent_info(int id, String first_name, String last_name, String date_of_birth, int age, String email, int no_of_policies, String street, String house, String landmark, String city, String state, String zipcode, String gender, int branch_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.age = age;
        this.email = email;
        this.no_of_policies = no_of_policies;
        this.street = street;
        this.house = house;
        this.landmark = landmark;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.gender = gender;
        this.branch_id = branch_id;
    }

    public Agent_info() {

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

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public int getAge() {
        return age;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNo_of_policies() {
        return no_of_policies;
    }


     public void setNo_of_policies(int no_of_policies) {
         this.no_of_policies = no_of_policies;
     }

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

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

}
