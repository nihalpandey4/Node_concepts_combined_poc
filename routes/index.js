const home_route = require("./home")
const auth_route = require("./auth")
const app_routes_handler = (app)=>{
    app.use("/home",home_route);
    app.use("/auth",auth_route)
}

module.exports = app_routes_handler;