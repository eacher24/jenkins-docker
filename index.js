const http = require('http');

const server= http.createServer((req, res)=>{

    res.write("Welcome to NODE App");
    res.end();

}) ;

server.listen(3000);

/*
npm init
npm init --yes (automatically passes yes to all the questions)


OS (Linux)
NodeJs (Software /CLI)
Open Port (3000) by default, container acts s a machine that has zero open port


*/