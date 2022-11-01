package com.example.backend.models;

public class Policy {
    private String name;
    private int price;

    Policy(){}

    public Policy(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Policy{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
