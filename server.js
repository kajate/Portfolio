const express = require("express");
const app = express();
const hb = require("express-handlebars");
const fs = require("fs");

app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.get("/", (req, res) =>{
    var projects = fs.readdirSync(__dirname + "/public/projects");
    var links = __dirname + "/public/projects/";
    res.render("home", {
        project: projects,
        link: links,
        layout: "main"
    });
});

app.get("/projects/:name/public/description", (req, res) => {
    // res.send(`<h1>${req.params.name}</h1>`);
    var projects = fs.readdirSync(__dirname + "/public/projects");
    var links = __dirname + "/public/projects/";
    var src = req.params.name + ".png";
    var obj = require(links + req.params.name + "/public/description.json");
    res.render("other", {
        name: req.params.name,
        project: projects,
        link: links,
        url: req.url.replace("description", ""),
        layout: "main",
        imgSrc: src,
        title: obj.name,
        desc: obj.description,
        techs: obj.techs
    });
});

// app.listen(8080, () => {
//     console.log("hi am listening on port 8080");
// });

// for Heroku
app.listen(process.env.PORT || 8080);
