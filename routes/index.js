const home_route = require("./home")
const auth_route = require("./auth")
const authorize = require("./auth/services/authorize");
const app_routes_handler = (app)=>{
    app.use("/home",authorize,home_route);
    app.use("/auth",auth_route)
}

module.exports = app_routes_handler;