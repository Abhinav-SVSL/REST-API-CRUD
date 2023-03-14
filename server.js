const http=require('http');
const express=require('express');
var cors = require('cors');
const app= express();
app.use(express.json());
const itemsRouter = require('./Public/items');


app.use(cors({origin: 'http://localhost:8100'}));
app.use('/items', itemsRouter);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Public/index.html");
});

const server = http.createServer(app);
server.listen(3000,()=>console.log("Server starter at port 3000"))
// const fs=require('fs');
// const server = http.createServer((req,res)=>{
//     console.log(req.url);
//     if(req.url==='/'){
//         res.write("Welcome hhh");
//         res.end();
//     }else if(req.url==='/abc'){
//         fs.readFile('abc.txt','utf-8',(err,data)=>{
//             console.log(data);
//         })
//     }
// })

// server.listen(3000,()=>console.log("Server starter at port 3000"))