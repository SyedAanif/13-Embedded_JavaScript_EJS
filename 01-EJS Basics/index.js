import express from "express";

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

app.get("/", (req, res)=> {
    const today = new Date(); // today
    const day = today.getDay(); // day of week Sun-Sat(0-6)
    
    // let or var
    let dayType = "a weekday";
    let advice = "work hard";

    if (day === 0 || day === 6) {
        dayType = "the weekend";
        advice = "have some fun";
    }

    // can skip __dirname+"/views/ because it automatically scans for views folder
    // should be keys from index.ejs
    res.render("index.ejs", {
        dayofWeek: dayType,
        toDo: advice
    });
});