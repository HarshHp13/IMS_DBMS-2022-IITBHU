package com.example.backend.models;

public class Admin_middleName {
    private int admin_id;
    private String middle_name;

    Admin_middleName(int admin_id, String middle_name){
        this.admin_id = admin_id;
        this.middle_name = middle_name;
    }

    public int getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(int admin_id) {
        this.admin_id = admin_id;
    }

    public String getMiddle_name() {
        return middle_name;
    }

    public void setMiddle_name(String middle_name) {
        this.middle_name = middle_name;
    }
}
