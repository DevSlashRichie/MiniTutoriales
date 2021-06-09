const express = require('express');
const app = express();

app.get('/holamundo', (req, res) => {
    return res.status(200).json({
        message: "Hola Mundo"
    });
});

app.listen(8080, (err) => {
    if(err)
        return console.error(err);
    console.log("Server listening in port 8080")    ;
});
