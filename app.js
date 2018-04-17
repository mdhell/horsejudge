var express                 = require("express"),
    app                     = express();
    
app.set("view engine", "ejs");    
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("home");
});
app.get("/home", function(req, res) {
    res.render("home");
});
    
app.get("/judge1", function(req, res) {
    res.render("judge1");
});

app.get("/total", function(req, res) {
    res.render("total");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Horse Judger es aqui!");
})