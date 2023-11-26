import express from "express";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended:true})); //body-parser

app.listen(PORT, ()=> {
    console.log(`Server started on port: ${PORT}`);
});

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req, res)=> {
    const fullName = req.body["fName"] + " " + req.body["lName"];
    const len = fullName.length - 1; // for space
    res.render("index.ejs", {
        length: len,
        name: fullName
    });
});
