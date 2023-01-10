const express = require('express');
import data from '../frontend/src/data'
const PORT = process.env.PORT || 5000

const app = express();
app.get('/api/products' , (req,res)=>{
    res.status(200).send(data.products);
})

app.listen(5000, ()=>{
    console.log(`Listening on ${PORT}`);
})