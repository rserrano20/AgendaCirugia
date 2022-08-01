import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

const EditarCirugia = (props)=> {
  //generar los ref
  const nombreCirugiaRef = useRef("");
  const cirujanoCirugiaRef = useRef("");
  const [error,setError] = useState(false);

  const handleSubmit = async(e)=> {
  e.preventDefault();
  //validar

 
  if(
      nombreCirugiaRef.current.value.trim() === "" ||
      cirujanoCirugiaRef.current.value.trim() === ""
  ){
   setError(true);
   return;
  }
  setError(false);
   //enviar cirugia a modificar a mi api
  //creo objeto
  const cirugiaModificada = {
    nombreCirugia: nombreCirugiaRef.current.value,
    cirujanoCirugia: cirujanoCirugiaRef.current.value
  }
  try{
    const consulta = await fetch(`http://localhost:4000/pacientes/${props.cirugia.id}`,
    {
      method:"PUT",
      headers:{ "Content-Type": "application/json"
      },
      body: JSON.stringify(cirugiaModificada)
    }); 
    console.log(consulta);
    if(consulta.status === 200){
      //actualizar la api
       props.setRecargarCirugias(true);
       Swal.fire(
        'cirugia Modificada!',
        'se modifico  correctamente!',
        'success'
      ) 
      props.history.push("/cirugias");
    }

  } catch(msjError){
    console.log(msjError);
  }
};
 
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center mt-4">Editar Cirugia</h1>
        <hr className="bg-primary" />
        {
        error ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form.Group className="mb-3" controlId="agendaId">
          <Form.Label>Paciente</Form.Label>
          <Form.Control
            type="text"
            ref={nombreCirugiaRef}
            defaultValue={props.cirugia.nombreCirugia}
             />
        </Form.Group>
        <Form.Group className="mb-3" controlId="agendaId">
          <Form.Label>Cirujano</Form.Label>
          <Form.Control
            type="text"
            ref={cirujanoCirugiaRef}
            defaultValue={props.cirugia.cirujanoCirugia}
            
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="">
          Guardar
        </Button>
      </Form>
    </div>
  );
};
export default withRouter(EditarCirugia);
