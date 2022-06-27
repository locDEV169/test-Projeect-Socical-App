const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const cardRoute = require("./routes/listCard");

dotenv.config();
const db =
    "mongodb+srv://root:1234@cluster0.eibio.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    })
    .then(() => console.log("DB success connect "))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.use("/api/card", cardRoute);

app.listen(port, () => {
    console.log(`BE server running is  ${port} `);
});
