const app = require("express")();
const server =  require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Server is Running");
});


io.on("connection",(socket) => {
    //getting my id 
    socket.emit("me",socket.id);
    
    //for disconnection
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
    })

    socket.on("callUser",({userToCall,signalData,from,name}) => {
        io.to(userToCall).emit("callUser",{ signal: signalData, from,name});
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callAccepted",data.signal)
    })
    
})

server.listen(PORT,() => console.log(`Server is running on ${PORT}`))