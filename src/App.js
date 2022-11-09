import  React,{useEffect,useState} from "react";
import {  BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import './bootstrap.min.css'; 
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Inicio from './components/principal/Inicio';
import AgregarCirugia from "./components/cirugias/AgregarCirugia";
import ListarCirugias from "./components/cirugias/ListarCirugias";
import EditarCirugia from "./components/cirugias/EditarCirugia";
import Contacto from "./components/principal/Contacto";




function App() {
  const [cirugias,setCirugias]= useState([]);
  const [recargarCirugias,setRecargarCirugias]= useState (true);
 

  useEffect(()=>{
    //llamar api-buscar arreglo de datos
    if(recargarCirugias){
       consultarAPI();
       setRecargarCirugias(false);
    } 
  },[recargarCirugias]);

  const consultarAPI = async() =>{
    try{
      //get operacion
      const respuesta = await fetch("http://localhost:4000/pacientes")
      console.log(respuesta);
     
      const resultado = await respuesta.json(); 
      console.log(resultado);
      //guardar datos en el state
      setCirugias(resultado);


    }catch(error){
      console.log(error);
    }
  }

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/"   >
          <Inicio></Inicio>
        </Route>
        <Route exact path="/contacto"   >
          <Contacto></Contacto>
        </Route>
        <Route  exact path="/cirugias"  >
          <ListarCirugias cirugias={cirugias} setRecargarCirugias={setRecargarCirugias}></ListarCirugias>
        </Route>
        <Route  exact path="/cirugias/nuevo">
          <AgregarCirugia setRecargarCirugias={setRecargarCirugias}></AgregarCirugia>
        </Route>
        <Route  exact path="/cirugias/editar/:id"  render={(props)=>{
          //tomar id de la ruta
          const parametro = parseInt(props.match.params.id)
          console.log(parametro);

          //buscar el producto a editar en array producto
          const cirugiaBuscado = cirugias.find((item)=> item.id === parametro)
          console.log(cirugiaBuscado);

          //retorno o dibujo el componente editar producto
          return  <EditarCirugia cirugia={cirugiaBuscado} setRecargarCirugias={setRecargarCirugias}></EditarCirugia>

        }}>
         
        </Route> 
        
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
