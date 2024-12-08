class LibraryController {
    constructor(model) {
        this.model = model;
    }

    returnBook(bookId, userId, isLate) {
        const book = this.model.getBookById(bookId);
        if (!book) {
            return "Book not found!";
        }

        if (book.isAvailable) {
            return "This book is already available in the library.";
        }

        this.model.updateBookStatus(bookId, true);

        if (isLate) {
            const user = this.model.getUserById(userId);
            const fine = 50; // Fixed fine
            if (user) {
                this.model.updateUserFine(userId, user.fineAmount + fine);
            } else {
                this.model.addUser(new User(userId, fine));
            }
            return "Book returned successfully with a late fine of $50.";
        }

        return "Book returned successfully without any fine.";
    }
}
