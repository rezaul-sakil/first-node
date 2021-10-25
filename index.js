
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("my first ever node and express project")
});




const users = [
    {idx:0, name:"shabana", email:"shabana@gmail.com"},
    {idx:1, name:"shohana", email:"shohana@gmail.com"},
    {idx:2, name:"sharika", email:"sharika@gmail.com"},
    {idx:3, name:"susmita", email:"susmita@gmail.com"},
    {idx:4, name:"srabonti", email:"srabonti@gmail.com"},
    {idx:5, name:"subarna", email:"subarna@gmail.com"},
];


// GET METHOD

app.get("/users", (req, res)=>{
    res.send(users)
});


app.get("/users/:idx", (req, res)=>{
    const index = req.params.idx;
    const user = users[index]
    res.send(user)
});


app.get("/users", (req,res)=>{
    const searchItem = req.query.search;

    if(searchItem){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(searchItem));
        res.send(searchResult)
    }else{
        res.send(users)
    }
   
});




app.get("/fruits", (req, res)=>{
    res.send(["mango", 'orange', 'banana', 'grapes']);
});

app.get("/fruit/mango/fazli", (req,res)=>{
    res.send("yummy yummy fazli")
})


// POST METHOD

app.post("/users", (req, res)=>{
    const newUser = req.body;
    newUser.idx = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);

    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})






app.listen(port, ()=>{
    console.log('listening to the port', port)
})