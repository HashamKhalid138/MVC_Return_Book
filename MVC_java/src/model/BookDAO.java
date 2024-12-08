// src/com/example/model/BookDAO.java
package com.example.model;

import java.util.ArrayList;
import java.util.List;

public class BookDAO {
    private List<Book> books = new ArrayList<>();

    public BookDAO() {
        books.add(new Book("B001", false));
        books.add(new Book("B002", true));
    }

    public Book getBookById(String bookId) {
        for (Book book : books) {
            if (book.getBookId().equals(bookId)) {
                return book;
            }
        }
        return null;
    }
}
