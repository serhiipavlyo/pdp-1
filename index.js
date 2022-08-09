const express = require("express");
const mongoose = require("mongoose");
const registerApi = require("./routes/register");
const loginApi = require("./routes/login");
require("dotenv").config();
const app = express();
const auth = require("./middleware/auth");

const initServer = () => {
    app.use(express.json());
    app.get("/", (req, res) => {
        res.end("Server is running!");
    });
    app.use("/api/", registerApi);
    app.use("/api/", loginApi);
    app.post("/welcome", auth, (req, res) => {
        console.log(req)
        res.status(200).send("Welcome 🙌 ");
    });
    app.listen(process.env.API_PORT || 5000, () => {
        console.log("Server running");
    });
};

mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log("connected to db");

        initServer();
    }
);