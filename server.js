const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')
app.use('/',express.static(__dirname+'/public'));
app.set('views',__dirname+'/views')
app.use(express.json())
const PORT=3000;

app.get('/',function(req,res){
    res.render('index');
})

app.listen(PORT ,function(){
    console.log("Server is running on "+PORT);
})