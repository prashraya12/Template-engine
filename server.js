const express = require("express");
const app = express();



//set the view engine

app.set("view engine", "ejs");

app.get("/", (req, res) =>{

    // res.send("hello this is home page");

    // res.render(index.ejs);
    res.render("index.ejs")

})


 app.get("/contactus", (req, res) =>{

     // res.send("hello this is home page");


     res.render("contactus.ejs")

 })


 app.get("/aboutus", (req, res) =>{

//     // res.send("hello this is home page");

     res.render(index.ejs)

 })


 app.get("/posts", (req, res) =>{

    //     // res.send("hello this is home page");
        let posts = [{
            title:"HTML",
            description:"HTML stands for hypertext markup language"

        },
        {
            title:"CSS",
            description: "CSS stands for cascaded style sheet"

        },
         {
            title:"JS",
            description:"JS is light weight programing language"
        },
        {
            title: "Python",
            description: "Python is mainly data science oriented programming language"

        }
    ]
        
            
         res.render("posts.ejs", {posts})
    
     })




 app.get("/profile", (req, res) =>{

//     // res.send("hello this is home page");
    let user = {

        name:"prashrya"
    }
    
        
     res.render("profile.ejs", {user})

 })

app.listen(3000, (req , res) =>{

    console.log( "server is running at port no 3000");

})