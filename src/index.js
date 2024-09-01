const express = require("express");
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const useAPiroutes = require('./routes/userroutes/index')


const app = express();

const setupAndStartServer = async () => {
   
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api/user', useAPiroutes)
    //create the express object
    
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
    })
}

setupAndStartServer();