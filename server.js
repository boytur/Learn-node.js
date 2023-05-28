const express = require("express");
const app = express();
const PORT = process.env.PORT;

//Connect to HTML
//First re quir path
const path = require("path");

//ใช้ path เพื่อดึงหน้า index.html
app.use(express.static(path.join(__dirname, "/public")));

//เอาไว้จัดการ req
//เขาเข้ามาหน้า "/" จะส่งอะไรให้เขาไป
app.get("/", (req, res) => {
  //จะส่งอะไร
  res.render("index",{username:'pramsa'});
});

//รอฟังที่พอร์ต 3000 อยากให้เขาทำอะไร ตอนนี้พอร์ตยังเปิดไหม
app.listen(PORT, () => {
  console.log("Listening on port %d",PORT);
});


app.set("views","./src/views")
app.set("views engine","ejs");

//มาทําความรู้จักกับ Cluster ว่ามันช่วยเว็บแอปของเราได้ อย่างไร ?
