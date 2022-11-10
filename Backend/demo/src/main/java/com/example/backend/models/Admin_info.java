package com.example.backend.models;


import java.time.Period;


public class Admin_info {
    private int id;
    private String first_name;
    private String last_name;
    private String date_of_birth;
    private String email;
    private int age;
    private String gender;

    private int branch_id;

    public Admin_info(){}

    public Admin_info(int id, String first_name, String last_name, String date_of_birth, String email, int age, String gender, int branch_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.age = age;
        this.gender = gender;
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

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public int getAge() {
        return age;
    }
    public void setAge(int age){this.age=age;}

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}




