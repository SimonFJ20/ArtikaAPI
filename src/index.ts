
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

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
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

// route all routes to router
server.use('/', router);

// connecting do MongoDB specified as ENV variable
mongoose.connect(<string> process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

    console.log('Connected to MongoDB');
    
});

// run server
server.listen(port, () => {

    console.log(`Artika API server on port`, port);

});



