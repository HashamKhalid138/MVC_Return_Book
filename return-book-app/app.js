const express = require("express");
const bodyParser = require("body-parser");
const returnBookRoutes = require("./routes/returnBookRoutes");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the Return Book Form on the Root URL
app.get("/", (req, res) => {
    res.render("returnBook", { message: null });
});

// Routes
app.use("/", returnBookRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
