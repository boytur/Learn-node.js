const express = require('express')
const app = express()
const port = 3001 ;


//เอาไว้จัดการ req 
//เขาเข้ามาหน้า "/" จะส่งอะไรให้เขาไป

app.get('/', (req, res) =>{
    //จะส่งอะไร
    res.send('Halo Welcum...')
})

//รอฟังที่พอร์ต 3000 อยากให้เขาทำอะไร ตอนนี้พอร์ตยังเปิดไหม
app.listen(port, () =>{
    console.log("Listening on port %d" , port);
})

