// src/Main.java
import com.example.controller.ReturnBookController;
import com.example.model.BookDAO;
import com.example.model.UserDAO;
import com.example.view.ReturnBookView;

public class Main {
    public static void main(String[] args) {
        BookDAO bookDAO = new BookDAO();
        UserDAO userDAO = new UserDAO();
        ReturnBookController controller = new ReturnBookController(bookDAO, userDAO);
        ReturnBookView view = new ReturnBookView();

        // Use case: Return book
        String bookId = "B001";
        String userId = "U003";
        boolean isLate = true;

        String result = controller.handleReturnBook(bookId, userId, isLate);
        view.displayMessage(result);
    }
}
