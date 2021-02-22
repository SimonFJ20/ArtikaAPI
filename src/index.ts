import express from 'express';





const server = express();
const port = 8000;









server.get('/', (req, res) => {
    res.send('Bruh');
});




server.listen(port, () => {

    console.log(`Express on port`, port);

});