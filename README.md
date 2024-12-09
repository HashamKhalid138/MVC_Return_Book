# **MVC Pattern**

This project demonstrates the **Model-View-Controller (MVC)** design pattern, commonly used for creating scalable, organized, and maintainable applications.

---

## **What is MVC?**

The **MVC (Model-View-Controller)** is a design pattern that divides an application into three interconnected components:

1. **Model**  
   - Represents the application's data and business logic.
   - Directly manages the data, logic, and rules of the application.
   - Example: Database operations, data structures, or APIs.

2. **View**  
   - Displays the data (provided by the Model) to the user in a specific format.
   - It is the User Interface (UI) layer of the application.
   - Example: HTML, templates, or components.

3. **Controller**  
   - Acts as an intermediary between Model and View.
   - Handles user input, processes requests, and updates the Model or View as necessary.
   - Example: API endpoints or event listeners.

---

## **How It Works**

1. **User Interaction:**  
   The user interacts with the **View** (e.g., clicks a button or submits a form).

2. **Controller Processing:**  
   The **Controller** receives the user's request, processes it, and interacts with the **Model** to retrieve or modify data.

3. **Model Update:**  
   The **Model** handles data manipulation or logic and updates itself accordingly.

4. **View Update:**  
   The **View** retrieves updated data from the **Model** and refreshes the UI to reflect the changes.


