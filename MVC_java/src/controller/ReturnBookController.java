// src/com/example/controller/ReturnBookController.java
package com.example.controller;

import com.example.model.Book;
import com.example.model.BookDAO;
import com.example.model.User;
import com.example.model.UserDAO;

public class ReturnBookController {
    private BookDAO bookDAO;
    private UserDAO userDAO;

    public ReturnBookController(BookDAO bookDAO, UserDAO userDAO) {
        this.bookDAO = bookDAO;
        this.userDAO = userDAO;
    }

    public String handleReturnBook(String bookId, String userId, boolean isLate) {
        Book book = bookDAO.getBookById(bookId);
        if (book == null) {
            return "Book not found!";
        }

        if (book.isAvailable()) {
            return "This book is already available in the library.";
        }

        book.setAvailable(true);

        if (isLate) {
            User user = userDAO.getUserById(userId);
            if (user == null) {
                user = new User(userId, 50); // Add user with fine if not found
                userDAO.addUser(user);
            } else {
                user.setFineAmount(user.getFineAmount() + 50);
            }
            return "Book returned successfully with a late fine of $50.";
        }

        return "Book returned successfully without any fine.";
    }
}
