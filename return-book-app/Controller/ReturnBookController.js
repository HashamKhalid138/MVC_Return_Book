const { books, findBookById, updateBookStatus } = require("../models/Book");
const { users, findUserById, updateUserFine } = require("../models/User");

exports.returnBook = (req, res) => {
    const { bookId, userId, isLate } = req.body;

    const book = findBookById(bookId);

    if (!book) {
        return res.render("returnBook", { message: "Book not found!" });
    }

    if (book.isAvailable) {
        return res.render("returnBook", { message: "This book is already available in the library." });
    }

    updateBookStatus(bookId, true);

    if (isLate === "on") {
        const fine = 50;
        const user = findUserById(userId);

        if (user) {
            updateUserFine(userId, user.fineAmount + fine);
        } else {
            updateUserFine(userId, fine);
        }

        return res.render("returnBook", { message: "Book returned successfully with a late fine of $50." });
    }

    res.render("returnBook", { message: "Book returned successfully without any fine." });
};
