class Book {
    constructor(id, isAvailable) {
        this.id = id;
        this.isAvailable = isAvailable;
    }
}

const books = [
    new Book("B001", false), // Borrowed
    new Book("B002", true),  // Available
];

module.exports = {
    books,
    findBookById: (id) => books.find((book) => book.id === id),
    updateBookStatus: (id, status) => {
        const book = books.find((book) => book.id === id);
        if (book) book.isAvailable = status;
    },
};
