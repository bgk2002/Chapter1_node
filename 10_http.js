const http=require('http')

// creating the server
const server=http.createServer((req,res)=>{
    // console.log(req);
    if(req.url==='/'){
    console.log("server started");
    res.write("welcome to our home page");
    }
    if(req.url==='/about'){
        res.write("This is about page");
    }
    res.end();
})

server.listen(5000);