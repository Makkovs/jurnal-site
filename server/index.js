require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./db");
const router = require("./routes");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

async function startServer () {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); 
        
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT} host ${HOST}`)
        });
    } catch (error){
        console.log(error);
    };
};

startServer();