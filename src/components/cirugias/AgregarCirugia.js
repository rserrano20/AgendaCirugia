import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Swal from  'sweetalert2';
import { withRouter} from 'react-router-dom';

const AgregarCirugia = (props) => {
  const [nombreCirugia,setNombreCirugia]= useState("");
  const [cirujanoCirugia,setCirujanoCirugia]=useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    //validar 

    if(
      nombreCirugia.trim() === "" || 
      cirujanoCirugia.trim() === ""  
      ){
      //mostrar cartel de error
      setError(true);
      return;

    }
    setError(false);

    const datos={
      nombreCirugia,
      cirujanoCirugia
    };
    //estar atento que el codigo , no falle, y nos lleva tratar los errores
   try{
    const cabecera={
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    }

    const resultado = await fetch("http://localhost:4000/pacientes",cabecera)
    console.log(resultado);
    if(resultado.status === 201){

      props.setRecargarCirugias(true)
      Swal.fire(
        'cirugia agregada!',
        'se creo la cirugia correctamente!',
        'success'
      )
      props.history.push("/cirugias")
    }
   }catch(error){
    console.log(error);

   }
  };

    return (
        <section  className="container ">
        <Form onSubmit={handleSubmit}>
        <h1 className="text-center">Agregar  cirugia</h1>
        {
          error ?(
           <Alert variant={'danger'}>
          Todos los campos son obligatorios
          </Alert>) : null}
       
        <Form.Group className="mb-3" controlId="agendaId">
          <Form.Label>Paciente</Form.Label>
          <Form.Control type="text" placeholder="Paciente" onChange={(e)=> setNombreCirugia(e.target.value)} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="agendaId">
          <Form.Label>Cirujano</Form.Label>
          <Form.Control type="text" placeholder="Cirujano"  onChange={(e)=> setCirujanoCirugia(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Agregar
        </Button>
        </Form>
      </section>
    );
};

export default withRouter(AgregarCirugia);