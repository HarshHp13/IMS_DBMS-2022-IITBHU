package com.example.backend.models;

import java.time.LocalDate;
import java.time.LocalTime;

public class Agent_Review {
    private int id;
    private String description;
    private LocalTime review_time;
    private LocalDate date;

    // Foreign keys
    private int user_id;
    private int agent_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalTime getReview_time() {
        return review_time;
    }

    public void setReview_time(LocalTime review_time) {
        this.review_time = review_time;
    }

    public LocalDate getAgent_reviews_date() {
        return date;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

//    public void setAgent_reviews_date(LocalDate agent_reviews_date) {
//        Agent_reviews_date = agent_reviews_date;
//    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getAgent_id() {
        return agent_id;
    }

    public void setAgent_id(int agent_id) {
        this.agent_id = agent_id;
    }

}
