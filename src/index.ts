
/*
*       Artika API Server
*
*       Filename:   index.ts
*       Pathname:   ./index.ts
*       Language:   TypeScript
*       Content:    Main entry point for server
*
*       License:    GPL-2.0
*
*       Authors:
*       Simon From Jakobsen
*           Email:      simonfromjakobsen@gmail.com
*           GitHub:     SimonFJ20
*
*       Created:    22-02-2021
*       Last Edit:  22-02-2021
*/

import cors from 'cors';
import express from 'express';
import 'dotenv/config';



// init server
const server = express();



// for easier port management in deployment
let port: number = 0;

// check for enviroment variable and assign port 
if(process.env.PORT != null) {
    port = parseInt(<string> process.env.PORT);
} else {
    throw new Error('PORT not defined as ENV variable');
}




// required for accessing
// TODO research and apply cors options
server.use(cors());

// checks incoming request for type and if urlencoded.
// TODO reasearch
server.use(express.urlencoded({extended: false}));

// using JSON as default
server.use(express.json({type: 'application/json'}));





// test get
server.get('/', (req, res) => {
    console.log(req.body.msg)
    try {
        const msg = 'This is get: ' + req.body.msg;
        res.json({msg: msg}).status(200);
    } catch(err) {
        res.json({err: err}).status(400);
    }
});


// test post
server.post('/', (req, res) => {
    console.log(JSON.parse(JSON.stringify(req.body)))
    try {
        const msg = 'This is post: ' + req.body.msg;
        res.json({msg: msg}).status(200);
    } catch(err) {
        res.json({err: err}).status(400);
    }

});



// run server
server.listen(port, () => {

    console.log(`Artika API server on port`, port);

});



