document.addEventListener("DOMContentLoaded", () => {
    const model = new LibraryModel();
    const controller = new LibraryController(model);

    const form = document.getElementById("returnBookForm");
    const messageContainer = document.getElementById("message-container");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const bookId = document.getElementById("bookId").value;
        const userId = document.getElementById("userId").value;
        const isLate = document.getElementById("isLate").checked;

        const message = controller.returnBook(bookId, userId, isLate);

        messageContainer.innerHTML = `<p>${message}</p>`;
    });
});
