package com.example.backend.models;

public class User_middleName {
    
    private int user_id;
    private String middle_name;
    
    User_middleName(int user_id, String middle_name){
        this.user_id = user_id;
        this.middle_name = middle_name;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getMiddle_name() {
        return middle_name;
    }

    public void setMiddle_name(String middle_name) {
        this.middle_name = middle_name;
    }
}
