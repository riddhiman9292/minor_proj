const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
app.set('view engine','ejs');
const {verified_ips} = require('./config');
app.enable('trust proxy');
app.use(cors());
app.get('/sample',async (req,res)=>{
    if(verified_ips.find(`${req.ip}`)!=-1){
        res.status(200).send({
            Message:`ok`,
            ip:`${req.ip}`
        })
    }
    else{
        res.status(200).send({
            Message:`wrong`,
            ip:`${req.ip}`,
            valid:verified_ips
        })
    }
});
app.get('/home',async (req,res)=>{
    res.render('tenant_view');
})
const server = http.createServer(app);
server.listen(3000,()=>{
    console.log('Listening');
})