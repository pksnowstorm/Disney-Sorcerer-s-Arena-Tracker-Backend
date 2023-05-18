require("dotenv").config();
const { PORT = 4000 } = process.env;
const express = require("express");
const app = express();
//const mongoose = require("mongoose");
//const cors = require("cors");
//const morgan = require("morgan");

// mongoose.connect(MONGODB_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// mongoose.connection
//     .on("open", () => console.log("You are connected to mongoose"))
//     .on("close", () => console.log("You are disconnected from mongoose"))
//     .on("error", (error) => console.log(error));

// app.use(cors());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({extend: true}));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));