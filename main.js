const express = require('express')
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));


app.get('/', (req,res)=>{
    res.json({branch:'homolog'});
});

app.listen(port,()=>{
    console.log('start do serviço http')
})