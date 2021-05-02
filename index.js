const express = require("express");

const logger = require("morgan");

const app = express();  

const app_routes = require("./routes");
const db_generator = require("./database/db_generator");
const db_connection_initializer = require("./database/db_connection_initializer")

app.use(logger("dev"));

//parsing body of the incoming post request
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app_routes(app);
db_generator();

const server = app.listen(3000,()=>console.log("at 3000"))

process.on("SIGINT",()=>{
    console.log("SIGINT signal received");
    server.close(()=>{
        db_connection_initializer.close();
        console.log("Closing express server for new incoming requests");
    })
})

module.exports = app;