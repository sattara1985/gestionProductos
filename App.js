import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';







function App() {

const [nombre,setNombre]=useState("");
const [descripcion,setDescripcion]=useState();
const [especificacion,setEspecificacion]=useState("");
const [cantidad,setCantidad]=useState("");
const [precio,setPrecio]=useState();
const [id,setId]=useState();

const [editar,setEditar]=useState(false);

const[productosList,setProductos]=useState([]);

const add=()=>{
  axios.post("http://localhost:3001/create",{
    nombre:nombre,
    descripcion:descripcion,
    especificacion:especificacion,
    cantidad:cantidad,
    precio:precio
  }).then(()=>{
    getProductos();
    limpiarCampos();

    Swal.fire({
      title: "<strong>Registro Exitoso!!</strong>",
      html: "<i>El Producto <strong>"+nombre+"</strong> fue registrado con exito!</i>",
      icon: 'success',
      timer:2000,
    })

   // alert('registrado');
  }).catch(function(error){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No logre Agregar el producto! :(',
      footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
    })
  });
}

const update=()=>{
  axios.put("http://localhost:3001/update",{
    id:id,
    nombre:nombre,
    descripcion:descripcion,
    especificacion:especificacion,
    cantidad:cantidad,
    precio:precio
  }).then(()=>{
    getProductos();
    limpiarCampos();
    Swal.fire({
      title: "<strong>Actualización Exitosa!!</strong>",
      html: "<i>El producto <strong>"+nombre+"</strong> fue actualizado con exito!</i>",
      icon: 'success',
      timer:2000
    })
  }).catch(function(error){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No logre Actualizar el producto! :(',
      footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
    })
  });
}

const deleteProducto=(val)=>{
  
    Swal.fire({
      title: '¿Estas Seguro?',
      html: "<i>¿Esta seguro que desea Eliminar a <strong>"+val.nombre+"</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/delete/${val.id}`).then(()=>{
          getProductos();
          limpiarCampos();
          Swal.fire({
            icon: 'success',
            title: val.nombre+' fue eliminado.',
            showConfirmButton: false,
            timer: 2000
          });
        }).catch(function(error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No logre eliminar el empleado! :(',
            footer: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
          })
        });
        
      }
    })
    
    //alert('Empleado Editado');
    
  
}

const limpiarCampos=()=>{
    setNombre("");
    setDescripcion("");
    setEspecificacion("");
    setCantidad("");
    setPrecio("");
    setEditar(false);
   
  }
  


const editarProducto=(val)=>{
  setEditar(true);

  setNombre(val.nombre);
  setDescripcion(val.descripcion);
  setEspecificacion(val.especificacion);
  setCantidad(val.cantidad);
  setPrecio(val.precio);
  setId(val.id);


}

const getProductos = ()=>{
  axios.get("http://localhost:3001/productos").then((response)=>{
    setProductos(response.data);
    //alert("hola");
  });
}
  useEffect(()=>{
    getProductos();
  },[]);  
  

  return (
    <div className='container'>
    
    <div className="card text-center">
      <div className="card-header">
      Gestión de Productos
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre: </span>
          <input type="text" value={nombre} 
          onChange={(event)=>{
            setNombre(event.target.value);
          }}
          className="form-control" placeholder="Ingrese un Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Descripcion: </span>
          <input type="text" value={descripcion}
          onChange={(event)=>{
            setDescripcion(event.target.value);
          }}
          className="form-control"  placeholder="Ingrese una descripcion" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Especificacion: </span>
          <input type="text" value={especificacion}
         onChange={(event)=>{
          setEspecificacion(event.target.value);
        }}
          className="form-control"  placeholder="Ingrese una especificacion" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Cantidad: </span>
          <input type="number" value={cantidad}
          onChange={(event)=>{
            setCantidad(event.target.value);
          }}
          className="form-control"  placeholder="Ingrese una cantidad" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Precio: </span>
          <input type="number" value={precio}
           onChange={(event)=>{
            setPrecio(event.target.value);
          }}
          className="form-control"   placeholder="Ingrese el precio" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        
      
        
       
       
        
      </div>
      <div className="card-footer text-muted">
      {
        editar===true?
        <div>
        <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
        <button className='btn btn-danger m-2' onClick={limpiarCampos}>Cancelar</button>
        </div>
        :<button className='btn btn-success' onClick={add}>Registrar</button>  

      } 
           
      </div>
    </div>
    <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col"># id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Especificacion</th>
          <th scope="col">Cantidad</th>
          <th scope="col">precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          productosList.map((val,key)=>{
            return <tr key={val.id}>
                    <th>{val.id}</th>
                    <td>{val.nombre}</td>
                    <td>{val.descripcion}</td>
                    <td>{val.especificacion}</td>
                    <td>{val.cantidad}</td>
                    <td>{val.precio}</td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" 
                      onClick={()=>{
                        editarProducto(val);
                      }}
                      className="btn btn-info">Editar</button>
                      <button type="button" onClick={()=>{
                        deleteProducto(val);
                      }} className="btn btn-danger">Eliminar</button>
                     
                    </div>
                    </td>
                    
                </tr>
          })
         }
        
        
      </tbody>
    </table>
    </div>
  );
}

export default App;
