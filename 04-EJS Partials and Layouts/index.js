import express from "express";

const PORT = 3000;

const app = express();

// to let express js know thatpath of static files as middleware.
// the style-sheet reference changes accordingly
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req,res)=>{
    res.render("about.ejs")
})

app.get("/contact", (req,res)=>{
    res.render("contact.ejs")
})
