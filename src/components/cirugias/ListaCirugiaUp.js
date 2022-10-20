import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';

const ListaCirugiaUp = (props) => {
  const eliminarCirugia = (id) => {
    console.log(id);

    Swal.fire({
      title: "¿Estas seguro de eliminar ?",
      text: "no hay vuelta atras, si eliminas!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si,eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        // aqui es cuando acepte eliminar
        try {
          const respuesta = await fetch(
            `http://localhost:4000/pacientes/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            }
          );

          if ((respuesta.status === 200)) {
            props.setRecargarCirugias(true);
            Swal.fire("Eliminado!", "Tu cirugia fue eliminado.", "success");
          }
        } catch (error) {
          console.log(error);
          //alert para usuario final
        }
      }
    });
  };
  return (
    
    <ListGroup.Item className=" d-flex justify-content-between">
      {props.cirugia.id}-{props.cirugia.nombreCirugia}
      <span className="font-wegt-bold">${props.cirugia.cirujanoCirugia}</span>
      <div className="">
         <Link to= {`/cirugias/editar/${props.cirugia.id}`}  variante="btn-btn primary"><FontAwesomeIcon icon={faEdit} /> </Link>
        
        <Button
          variant="outline-warning btn-sm"
          onClick={() => eliminarCirugia(props.cirugia.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>
    </ListGroup.Item>
   
  );
};

export default ListaCirugiaUp;
