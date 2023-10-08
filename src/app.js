const express=require('express');
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 3000;

// public static Path
    const staticpath=path.join(__dirname,"../public");
    const templates_path=path.join(__dirname,"../templates/views");
    const partials_path=path.join(__dirname,"../templates/partials");

    app.set('view engine', 'hbs');
     app.set("views",templates_path);
     hbs.registerPartials(partials_path);
   app.use(express.static(staticpath));


    // routing going on here 

    app.get("/", (req, res) => {
        res.render("home");
    });
    

  
app.get("/about",(req,res)=>{
    res.render("about")
});

app.get("/blog",(req,res)=>{
    res.render("blog");
})

app.get("/shop",(req,res)=>{
    res.render("shop");
})
app.get("/cart",(req,res)=>{
    res.render("cart");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})



app.get("/sproduct",(req,res)=>{
    res.render("sproduct");
})


app.get("*",(req,res)=>{
    res.send("this is error page");
})


app.listen(port,()=>{
     console.log(`the server is working at port no${port}`);
});