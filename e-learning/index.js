const express =require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'ui'));

app.get('/',(req,res)=>{
    res.render('index',{
        title:'HOME_PAGE'
    })
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT_US'
    })
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
