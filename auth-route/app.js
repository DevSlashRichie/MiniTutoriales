const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
    const token = jwt.sign({
        user: "Ricardo"
    }, "100");

    return res.status(200).json({
        token
    });
});

function auth() {
    return (req, res, next) => {
        const header = req.header('Authorization');

        if(!header)
            return res.status(403).json({
                msg: "Forbidden"
            });


        try {
            const token = jwt.verify(header.split(" ")[1], "100");
            if(token)
                next();
        } catch (e) {
            return res.status(403).json({
                msg: "Forbidden"
            });
        }


    }
}

app.get('/auth', auth(), (req, res) => {
    return res.status(200).json({
        msg: "Valid!"
    });
});


app.listen(8080, (err) => {
    if(err)
        console.error(err)
    console.log("Working!")
});












