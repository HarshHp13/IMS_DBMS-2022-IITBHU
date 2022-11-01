package com.example.backend.models;

import java.time.LocalDate;

public class Nominee {
    private int user_id;
    private int policy_id;
    private String first_name;
    private String last_name;
    private LocalDate date_of_birth;
    private String street_name;
    private String house_no;
    private String city;
    private String state;
    private String zipcode;
    private String phone;
    private String email;
    private String gender;
    private String relation_with_user;

    public Nominee(int user_id, int policy_id, String first_name, String last_name, LocalDate date_of_birth, String street_name, String house_no, String city, String state, String zipcode, String phone, String email, String gender, String relation_with_user) {
        this.user_id = user_id;
        this.policy_id = policy_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.street_name = street_name;
        this.house_no = house_no;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.relation_with_user = relation_with_user;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getPolicy_id() {
        return policy_id;
    }

    public void setPolicy_id(int policy_id) {
        this.policy_id = policy_id;
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

    public LocalDate getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(LocalDate date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getStreet_name() {
        return street_name;
    }

    public void setStreet_name(String street_name) {
        this.street_name = street_name;
    }

    public String getHouse_no() {
        return house_no;
    }

    public void setHouse_no(String house_no) {
        this.house_no = house_no;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRelation_with_user() {
        return relation_with_user;
    }

    public void setRelation_with_user(String relation_with_user) {
        this.relation_with_user = relation_with_user;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
