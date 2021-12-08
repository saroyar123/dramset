const express=require("express");
const https=require("https");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
   
})
app.post("/",function(req,res){
    const quary=req.body.cityName;
     const url="https://api.openweathermap.org/data/2.5/weather?q="+ quary+"&appid=33f9287848880745e42ce2ee6474c8a1&units=metric"

    https.get(url,function(response){

        console.log(response.statusCode);
        response.on("data",function(data)
        {
            const weatherdata=JSON.parse(data);
            console.log(weatherdata);
            const tem=weatherdata.main.temp;
            const dis=weatherdata.weather[0].description;
            const ico=weatherdata.weather[0].icon;
            const imgul="http://openweathermap.org/img/wn/"+ico+"@2x.png"
            const t="<h1>Temparature of "+ quary+" is "+tem+" degree celcius</h1><h2>Weather condition is "+dis+"</h2>"
            res.write(t);
            res.write("<img src="+imgul+">");
            res.send();
        })

    })
})
app.listen(3000,function(){
    console.log("my server is running");
})

