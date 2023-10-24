const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mangodb");

console.log(__dirname);
 const templatePath = path.join(__dirname, 'templates');
app.use(express.static(templatePath));
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("frontpage");
});
app.get("/login", (req, res) => {
  res.render("login");
})
app.get('/engineering/index.hbs', (req, res) => {
  res.render("./engineering/engineerings")
});
 app.get('/novels/index.hbs' , (req,res)=>{
   res.render("./novels/novelsbook.hbs")
 })
app.get('/secondpage/index' ,(req ,res)=>{
  res.render("./secondpage/index")
});
app.get('/ncert/booklist' ,(req ,res)=>{
  res.render("./ncert/booklist")
});
app.get('/thirdpage/about' ,(req ,res)=>{
  res.render("./thirdpage/about")
});
app.get('/thirdpage/contact' ,(req ,res)=>{
  res.render("./thirdpage/contact")
});
app.get('/thirdpage/thankyou' ,(req ,res)=>{
  res.render("./thirdpage/thankyou")
});



app.get("/signup", (req, res) => {
  res.render("signup");
});


app.post("/signup", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      password: req.body.password
    };

    await collection.insertMany([data]);

    res.render("home");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  const enteredName = req.body.name;
  const enteredPassword = req.body.password;

  try {
    // Check if a user with the entered name and password exists in the database
    const user = await collection.findOne({ name: enteredName, password: enteredPassword });

    if (user) {
      // If user is found, render the home view
      res.render("home");
    } else {
      // If user is not found, render the login view with an error message
      res.render("login", { error: "Invalid credentials. Please try again." });
    }
  } catch (error) {
    // Handle database error
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
