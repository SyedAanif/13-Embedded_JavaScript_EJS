import express from "express";

const PORT = 3000;

const app = express();

app.listen(PORT, ()=> {
    console.log(`Server started on port: ${PORT}`);
});

app.get("/", (req, res)=>{
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some HTML content</em>"
    };

    res.render("index.ejs", data);
});