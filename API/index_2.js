const express  = require('express')
const cors = require('cors')
const app = express();
app.use(cors())


app.get("/",(req,res)=>{
    res.json({message: "hello"})
})

app.get("/index2cal",(req,res)=>{
    let n = 4;
    let a = [21,18,16,7]
    let resultX = [];
    let resultY = []
    let x1 = 0,y1 = 0;
    for(let i=0;i<n;i++){
        if(a[i] % 4 === 1){
            y1++
        }
        else if(a[i] % 4 === 2 ){
            x1--
        }
        else if(a[i] % 4 === 3){
            x1++
        }
        else if(a[i] % 4 === 0){
            y1--
        }
        resultX[i] = x1
        resultY[i] = y1
    }
    res.json({resultX,resultY});
    //res.json({ n,a,x1,y1 })
})

app.post("/index2cal",(req,res)=>{
    let {n,a} = req.body
    let resultX = [];
    let resultY = [];
    let x1 = 0,y1 = 0;
    for(let i=0;i<n;i++){
        if(a[i] % 4 === 1){
            y1++
        }
        else if(a[i] % 4 === 2 ){
            x1--
        }
        else if(a[i] % 4 === 3){
            x1++
        }
        else if(a[i] % 4 === 0){
            y1--
        }
        resultX[i] = x1
        resultY[i] = y1
    }
    res.json({resultX,resultY});
    //res.json({ n,a,x1,y1 })
})



app.listen(8800,()=>console.log("index_2"))