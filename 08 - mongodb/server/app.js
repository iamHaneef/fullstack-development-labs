const express = require("express");
const cors = require("cors");
const connectDB = require("../connection/db");
const User = require("../models/User");

const app = express();

// Connect Database
connectDB();

app.use(express.json());
app.use(cors());

// GET METHOD
app.get("/", (req, res) => {
    res.send("READ ALL DATAS");
});

// POST METHOD -- REGISTER 
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const newUser = { email, password };

    try {
        const check = await User.findOne({ email: email });
        if (check) {
            res.json("Exists");
        } else {
            await User.create(newUser);
            res.json("Not Exists");
        }
    } catch (error) {
        res.status(500).json("not exists");
    }
});

// POST METHOD -- LOGIN
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await User.findOne({ email: email });
        if (check) {
            res.json("EXISTS");
        } else {
            res.json("NOT EXISTS");
        }
    } catch (err) {
        res.status(500).json("NOT EXISTS IN SERVER");
    }
});

// CRUD operations
app.post("/users", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.json(user);
    } catch (err) {
        res.status(400).json("IT DIDN'T CREATE USER");
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json("IT DIDN'T READ USER");
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(400).json("IT DIDN'T READ that ONE USER");
    }
});

app.put("/users/:id", async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json("IT DIDN'T UPDATE that ONE USER");
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        res.json(deleted);
    } catch (err) {
        res.status(400).json("IT DIDN'T DELETE that ONE USER");
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`SERVER START on port ${PORT}`);
});
