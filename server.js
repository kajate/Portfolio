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
        layout: "main",
    });
});

app.get("/projects/:name/public/description", (req, res) => {
    var projects = fs.readdirSync(__dirname + "/public/projects");
    var links = __dirname + "/public/projects/";
    var obj = require(links + req.params.name + "/public/description.json");
    res.render("other", {
        name: obj.name,
        project: projects,
        link: links,
        url: req.url.replace("description", ""),
        layout: "main",
        imgSrc: obj.image,
        title: obj.name,
        desc: obj.description,
        desctwo: obj.descriptiontwo,
        descthree: obj.descriptionthree,
        techs: obj.techs,
        code: obj.code,
        file: obj.file,
        weburl: obj.weburl,
        email: obj.email
    });
});

app.listen(process.env.PORT || 8080);
