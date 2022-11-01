package com.example.backend.models;

import java.time.LocalDate;
import java.time.LocalTime;

public class Transaction {
    private int id;
    private int amount;
    private String purpose;
    private String mode_of_transaction;
    private LocalDate transaction_date;
    private LocalTime transaction_time;

    // Foreign Keys
    private int policy_approval_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getMode_of_transaction() {
        return mode_of_transaction;
    }

    public void setMode_of_transaction(String mode_of_transaction) {
        this.mode_of_transaction = mode_of_transaction;
    }

    public LocalDate getTransaction_date() {
        return transaction_date;
    }

    public void setTransaction_date(LocalDate transaction_date) {
        this.transaction_date = transaction_date;
    }

    public LocalTime getTransaction_time() {
        return transaction_time;
    }

    public void setTransaction_time(LocalTime transaction_time) {
        this.transaction_time = transaction_time;
    }

    public int getPolicy_approval_id() {
        return policy_approval_id;
    }

    public void setPolicy_approval_id(int policy_approval_id) {
        this.policy_approval_id = policy_approval_id;
    }
}
