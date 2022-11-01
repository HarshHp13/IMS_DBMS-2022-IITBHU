package com.example.backend.models;

public class Admin_phone {
    private int id;
    private String phone;

    public Admin_phone(int id, String phone) {
        this.id = id;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
