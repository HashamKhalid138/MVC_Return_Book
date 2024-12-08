// src/com/example/model/User.java
package com.example.model;

public class User {
    private String userId;
    private int fineAmount;

    public User(String userId, int fineAmount) {
        this.userId = userId;
        this.fineAmount = fineAmount;
    }

    public String getUserId() {
        return userId;
    }

    public int getFineAmount() {
        return fineAmount;
    }

    public void setFineAmount(int fineAmount) {
        this.fineAmount = fineAmount;
    }
}
