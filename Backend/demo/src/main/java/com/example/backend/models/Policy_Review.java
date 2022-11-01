package com.example.backend.models;

import java.time.LocalDate;
import java.time.LocalTime;

public class Policy_Review {
    private int policy_review_id;
    private String description;
    private LocalTime review_time;
    private LocalDate Policy_review_date;
    private int user_id;
    private int policy_id;

    public int getPolicy_review_id() {
        return policy_review_id;
    }

    public void setPolicy_review_id(int policy_review_id) {
        this.policy_review_id = policy_review_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public LocalDate getPolicy_review_date() {
        return Policy_review_date;
    }

    public void setPolicy_review_date(LocalDate policy_review_date) {
        Policy_review_date = policy_review_date;
    }

    public LocalTime getReview_time() {
        return review_time;
    }

    public void setReview_time(LocalTime review_time) {
        this.review_time = review_time;
    }

    public int getPolicy_id() {
        return policy_id;
    }

    public void setPolicy_id(int policy_id) {
        this.policy_id = policy_id;
    }
}
