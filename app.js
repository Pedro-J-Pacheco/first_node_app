const express = require ('express');
const router = require("./routes/pages");

const app = express ();
const port = 3000;

app.use(router);



app.listen(port,( )=>{
    console.log(`Server started on ${port}`);
});
