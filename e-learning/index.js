const express =require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'ui'));