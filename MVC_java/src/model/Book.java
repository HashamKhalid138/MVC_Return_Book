// src/com/example/model/Book.java
package com.example.model;

public class Book {
    private String bookId;
    private boolean isAvailable;

    public Book(String bookId, boolean isAvailable) {
        this.bookId = bookId;
        this.isAvailable = isAvailable;
    }

    public String getBookId() {
        return bookId;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}
