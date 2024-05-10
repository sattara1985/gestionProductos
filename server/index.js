const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password : "",  //enter your password here
    database: "prueba"
});

app.post("/create",(req,res)=>{
    const nombre=req.body.nombre;
    const descripcion=req.body.descripcion;
    const especificacion=req.body.especificacion;
    const cantidad=req.body.cantidad;
    const precio=req.body.precio;

    db.query('insert into producto(nombre,descripcion,especificacion,cantidad,precio) values (?,?,?,?,?)',[nombre,descripcion,especificacion,cantidad,precio],
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});

app.get("/productos",(req,res)=>{
    db.query('select * from producto order by id desc',
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});



app.put("/update",(req,res)=>{
    const id=req.body.id;
    const nombre=req.body.nombre;
    const descripcion=req.body.descripcion;
    const especificacion=req.body.especificacion;
    const cantidad=req.body.cantidad;
    const precio=req.body.precio;

    db.query('UPDATE producto SET nombre=?,descripcion=?,especificacion=?,cantidad=?,precio=? WHERE id=?',[nombre,descripcion,especificacion,cantidad,precio,id],
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});

app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
   

    db.query('DELETE FROM  producto WHERE id=?',id,
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log('server is running on port 3001');
})



