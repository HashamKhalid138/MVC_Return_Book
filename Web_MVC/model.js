class LibraryModel {
    constructor() {
        this.books = [
            new Book("B001", false), // Borrowed
            new Book("B002", true),  // Available
        ];
        this.users = [
            new User("U001", 0),
            new User("U002", 50),
        ];
    }

    getBookById(bookId) {
        return this.books.find((book) => book.id === bookId);
    }

    getUserById(userId) {
        return this.users.find((user) => user.id === userId);
    }

    addUser(user) {
        this.users.push(user);
    }

    updateBookStatus(bookId, isAvailable) {
        const book = this.getBookById(bookId);
        if (book) book.isAvailable = isAvailable;
    }

    updateUserFine(userId, fineAmount) {
        const user = this.getUserById(userId);
        if (user) {
            user.fineAmount = fineAmount;
        } else {
            this.addUser(new User(userId, fineAmount));
        }
    }
}
