const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
app.set('view engine','ejs');
app.enable('trust proxy');
app.use(cors());
app.get('/sample',(req,res)=>{
    console.log(req.socket.remoteAddress);
    res.send('ok');
});
const server = http.createServer(app);
server.listen(3000,()=>{
    console.log('Listening');
})