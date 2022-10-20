import { Button } from 'react-bootstrap';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const ItemCirugia = (props) => {

    const eliminarCirugia = (id)=> {
        console.log(id);
        Swal.fire({
            title: '¿Estas seguro que quieres eliminar los datos?',
            text: "No puedes recuperar el dato eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,eliminar',
            cancelButtonText:'Cancelar',
          }).then( async(result) => {
            if (result.value) {
                try{

                    const respuesta = await fetch(`http://localhost:4000/pacientes/${id}`,{
                        method:"DELETE",
                        headers:{
                            "Content-Type": "application/json"
                    }
                     });
                    console.log(respuesta);
                    if(respuesta.status === 200){
                        props.setRecargarCirugias(true);
                        Swal.fire(
                        'Dato Eliminado',
                        'su dato fue eliminado correctamente.',
                        'success'
                      )
                    }
                    
                }catch(error){
                    console.log(error);
                    //ventana de sweetalert usuario final

                } 
            }
          });
    };
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            <p>
            {props.cirugia.nombreCirugia}{" "}
            <span className="font-weight-bold">{props.cirugia.cirujanoCirugia}</span> 
            </p>
            <div>
                <Link to={`/cirugias/editar/${props.cirugia.id}`}
                 className="btn btn-danger mr-2"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link>
                <Button variant="primary" onClick={()=> eliminarCirugia(props.cirugia.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button> </div>
        </ListGroup.Item>
        
    );
};

export default ItemCirugia;