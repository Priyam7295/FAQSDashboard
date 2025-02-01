const express = require('express')
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DBConnection } = require("./database/db");

const app = express();
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

app.use(express.json());



const {createFAQ} = require("./controllers/FAQController/createFAQ");
const {getFAQs} = require("./controllers/FAQController/getFAQs.js");
const {updateFAQ} = require("./controllers/FAQController/updateFAQ.js");

dotenv.config();
DBConnection();
const PORT= process.env.PORT;

app.listen(PORT, () => {  
    console.log(PORT)
    console.log(`Server started on http://localhost:${PORT}`);  
});

app.get("/",(req,res)=>{
    return res.send("Welcome to my website!");
})


// app.post("/faqs" ,(req,res)=>{
//     console.log(req.body);
//     console.log("called");
// });
app.post("/faqs", createFAQ );


app.get("/getfaqs", getFAQs);


app.put("/updatefaq/:id",updateFAQ);

