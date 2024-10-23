const express = require("express");
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig')
const userAPiroutes = require('./routes/userroutes/index')

const adminApiroutes = require('./routes/adminroutes/index')

const UserAuthservice = require('./services/user/userauth')

const app = express();

const setupAndStartServer = async () => {
   
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api/user', userAPiroutes);
    app.use('/api/admin', adminApiroutes);
    //create the express object
    
    app.listen(PORT, async () => {
        console.log(`Server Started at ${PORT}`);
        const service = new UserAuthservice();

        // const newtoken =  service.createTocken({email: "testuser@example.com", id: 9})
        // console.log("newtoclen", newtoken)

        // const response = service.verifytocken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQGV4YW1wbGUuY29tIiwiaWQiOjksImlhdCI6MTcyOTcwNjMzMCwiZXhwIjoxNzI5NzA2MzYwfQ.8RJQ-pi4T9RsR9RShY3WbqUdwOVp7kanTl0oKnqjwOc");
        // console.log("response",response)
    })
}

setupAndStartServer();