import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCirugia from './ItemCirugia';

const ListarCirugias = (props) => {
    return (
        <div className='container my-4'>
            <h1>Cirugias -Lista</h1>
        <ListGroup>
        {props.cirugias.map((cirugia)=>(
            <ItemCirugia key={cirugia.id} cirugia={cirugia} setRecargarCirugias={props.setRecargarCirugias}></ItemCirugia>
            ))}
      </ListGroup>
      </div>
    );
};

export default ListarCirugias;