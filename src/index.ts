
/*
*       Artika API Server
*
*       Filename:   index.ts
*       Pathname:   ./index.ts
*       Content:    Main entry point for server
*
*       License:    GPL-2.0
*
*       Author:     Simon From Jakobsen
*       Email:      simonfromjakobsen@gmail.com
*       GitHub:     SimonFJ20
*
*       Created:    22-02-2021
*       Last Edit:  22-02-2021
*/

import cors from 'cors';
import express from 'express';
import 'dotenv/config';



// init server
const server = express();

// for easier deployment
let port: number = 0;

if(process.env.PORT != null) {
    port = parseInt(<string> process.env.PORT);
} else {
    throw new Error('PORT not defined as ENV variable');
}




// for access
server.use(cors());

// using JSON as default
server.use(express.json({type: 'application/json'}));





// test
server.get('/', (req, res) => {
    res.send('Bruh');
});



// run server
server.listen(port, () => {

    console.log(`Artika API server on port`, port);

});



