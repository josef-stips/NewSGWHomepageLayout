const express = require("express");

// set up
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("../public"));

app.set('view engine', 'ejs');

// routes (URI's)
const userRouter = require("./routes/users.js");

app.use('/users', userRouter);

// listen to port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});