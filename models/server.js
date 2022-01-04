const express = require('express');
const cors = require('cors')

require('dotenv').config();



class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.userPath = {
            user: '/api/user'
        }
        this.middelware();
        this.routes();
    }

    middelware(){
        this.app.use( cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }

    routes(){
        
        this.app.use(this.userPath.user, require('../routes/users.js'));
        
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`escuchando desde http://localhost:${this.port}`)
        })
    }

}
module.exports = Server;
