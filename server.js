const express = require("express");
const path = require("path");
const api = require("./app/routing/apiRoutes");
const htm = require("./app/routing/htmlRoutes");



//keeps heroku app from falling asleep
var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 300000); // every 5 minutes (300000)

let app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

api.getter(app);
api.poster(app);

htm.survey(app);
htm.home(app);

app.listen(PORT, function() {
    console.log("connected");
})