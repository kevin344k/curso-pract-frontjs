const express=require('express')
const path=require('path')
const app = express()



app.set("port",process.env.PORT || 5000)
//app.set("views",path.join(__dirname,"src/public/views"))


app.use(express.static(path.join(__dirname,'src/public')))

//routes

const views=path.join(__dirname,"src/public/views")

app.get('/',(req,res)=>{
  res.sendFile(views+'/main.html')
})


app.listen(app.set("port"), () => {
  console.log(path.join(app.set('views')))
  console.log(`Server inciado on port ${app.get("port")} ` );
});

