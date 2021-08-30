var express = require('express');
let app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

//bGround.log("Hello World");
console.log("Hello World");

//app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(process.cwd() + '/public'));

app.get("/", function(req, res)

    {
        res.sendFile(__dirname + "/views/index.html");
    }
);

// app.get("/json", function(req, res)

//     {
//         res.json({"message": "HELLO JSON"});
//     }
// );

app.get("/json", function(req, res)

    {
     if (process.env.MESSAGE_STYLE === 'uppercase')
        {
         res.json({"message": "HELLO JSON"});
        }
     else
        {
         res.json({"message": "Hello json"});
        }
    }
);






 module.exports = app;