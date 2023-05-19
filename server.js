require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

 mongoose.connect(MONGODB_URL, {
     useUnifiedTopology: true,
     useNewUrlParser: true,
 });

 mongoose.connection
     .on("open", () => console.log("You are connected to mongoose"))
     .on("close", () => console.log("You are disconnected from mongoose"))
     .on("error", (error) => console.log(error));

const UserSchema = new mongoose.Schema({
    account: String,
    username: String,
    password: String
})

const AccountSchema = new mongoose.Schema ({
    name: String,
    characters: Number,
    spells: Number,
    club: String,
    events: String
})

const CharacterSchema = new mongoose.Schema ({
    name: String,
    tags: String,
    special1: String,
    special2: String,
    passive: String,
    starLevel: Number,
    gearTier: Number,
    farm: String,
    stone: String
})

const SpellSchema = new mongoose.Schema ({
    name: String,
    description: String,
    farm: String
})

const ClubSchema = new mongoose.Schema({
    name: String,
    members: Number,
    clubExpeditionTier: String,
    forbiddenDepthsRaidTier: String,
    siegeOfOlympusTier: String,
    alliance: String,
    contactInfo: String
});

const EventSchema = new mongoose.Schema({
    name: String,
    type: String,
    requirements: String,
    qualified: Boolean
});

 app.use(cors());
 app.use(morgan("dev"));
 app.use(express.json());
 app.use(express.urlencoded({extend: true}));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));