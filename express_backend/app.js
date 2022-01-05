'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const email = req.body.email;
    const filelink = req.body.filelink;
    console.log(email);
    console.log(filelink);
    const transporter = nodemailer.createTransport({
        // smtp hosting
        // for example gmail
        // service: 'gmail'
        service: ' your email smtp hosting',
        auth: {
            user: 'my email username', //  your email username
            pass: 'my email password' // your email password
        }
    });

    let mailOptrions = {
        from: '"Anime for Humanity" <gnest.nairb@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Selfcare Kit", // Subject line
        text: `Here is the link of the kit ${filelink}, enjoy it!!!`
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptrions, (error, info) => {
        if (error) {
            res.status(400).send("Sending Failure")
            return console.log(error);
        }
        console.log('Message Successfully Sent');
        res.send("'Message Successfully Sent'")
    });
})    
const port = 8000;
app.listen(port, () => console.log(`express listening on port ${port}`))