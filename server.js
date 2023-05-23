//Dependencies
require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser=require("body-parser")

//Database Connection
 mongoose.connect(MONGODB_URL, {
     useUnifiedTopology: true,
     useNewUrlParser: true
 });

 mongoose.connection
     .on("open", () => console.log("You are connected to mongoose"))
     .on("close", () => console.log("You are disconnected from mongoose"))
     .on("error", (error) => console.log(error));

//Models   
const UserSchema = new mongoose.Schema({
    account: String,
    username: String,
    password: String
})

const User = mongoose.model("User", UserSchema);

const AccountSchema = new mongoose.Schema ({
    name: String,
    characters: Number,
    spells: Number,
    club: String,
    events: String
})

const Account = mongoose.model("Account", AccountSchema);

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

const Character = mongoose.model("Character", CharacterSchema);

const SpellsSchema = new mongoose.Schema ({
    name: String,
    description: String,
    farm: String
})

const Spells = mongoose.model("Spells", SpellsSchema);

const ClubSchema = new mongoose.Schema({
    name: String,
    members: Number,
    clubExpeditionTier: String,
    forbiddenDepthsRaidTier: String,
    siegeOfOlympusTier: String,
    alliance: String,
    contactInfo: String
});

const Club = mongoose.model("Club", ClubSchema);

const EventSchema = new mongoose.Schema({
    name: String,
    type: String,
    requirements: String,
    qualified: Boolean
});

const Event = mongoose.model("Event", EventSchema);

const NewsSchema = new mongoose.Schema({
    date: String,
    description: String
});

const News = mongoose.model("News", NewsSchema);

//MiddleWare
 app.use(cors());
 app.use(morgan("dev"));
 app.use(express.json());
 app.use(express.urlencoded({extend: true}));
 app.use(bodyParser.json());
//Routes 
app.get("/", (req, res) => {
    res.send("hello world");
});

//Account Index Route
app.get("/account", async (req, res) => {
    try {
        res.join(await Account.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Account Create Route
app.post("/account", async (req, res) => {
    try {
        res.json(await Account.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//Account Delete Route
app.delete("/account/:id", async (req, res) =>{
    try {
        res.json(await Account.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

//Account Update Route
app.put("/account/:id", async (req, res) => {
    try {
        res.join(await Account.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Club Index Route
app.get("/club", async (req, res) => {
    try {
        res.join(await Club.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Club Create Route
app.post("/club", async (req, res) => {
    try {
        res.json(await Club.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//Club Delete Route
app.delete("/club/:id", async (req, res) =>{
    try {
        res.json(await Club.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

//Club Update Route
app.put("/club/:id", async (req, res) => {
    try {
        res.join(await Club.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Character Index Route
app.get("/character", async (req, res) => {
    try {
        res.join(await Character.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Character Create Route
app.post("/character", async (req, res) => {
    try {
        res.json(await Character.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//Character Delete Route
app.delete("/character/:id", async (req, res) =>{
    try {
        res.json(await Character.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

//Character Update Route
app.put("/character/:id", async (req, res) => {
    try {
        res.join(await Character.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Spell Index Route
app.get("/spells", async (req, res) => {
    try {
        res.join(await Spells.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Spell Create Route
app.post("/spells", async (req, res) => {
    try {
        res.json(await Spells.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//Spell Delete Route
app.delete("/spells/:id", async (req, res) =>{
    try {
        res.json(await Spells.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

//Spell Update Route
app.put("/spells/:id", async (req, res) => {
    try {
        res.join(await Spells.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//News Index Route
app.get("/news", async (req, res) => {
    try {
        res.join(await News.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//News Create Route
app.post("/news", async (req, res) => {
    try {
        res.json(await News.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//News Delete Route
app.delete("/news/:id", async (req, res) =>{
    try {
        res.json(await News.findByIdAndRemove(req.params.id))
    } catch(error) {
        res.status(400).json(error)
    }
})

//News Update Route
app.put("/news/:id", async (req, res) => {
    try {
        res.join(await News.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));