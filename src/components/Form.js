
import '../styles/Form.css';
import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';


export const Form = () => {

    const [Jugadores, setJugadores] = useState({
        nombre: '',
        equipo: '',
        numero: '',
        imagen: ''
        
    })

    const {nombre,equipo,numero,imagen} = Jugadores;

    const postData = () => {
        axios.post(url,Jugadores)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
        
   }

   const handleChanged = ({target}) => {
    setJugadores({
      ...Jugadores,
      [target.name]: target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
   }





    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Jugadores</h2>
           <hr/>
               <div>
                   <label>Nombre Completo</label>
                   <input id="inputnombre" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               
                  
               <div>
                   <label>Equipo</label>
                   <input id="inputNumero" type="text" value={equipo} name="equipo" onChange={handleChanged}/>
               </div>
               <div>
                   <label>Numero de Camisa</label>
                   <input id="inputequipo" type="number" name="numero" value={numero} onChange={handleChanged}/>
               </div>
             
               <div>
                   <label name="imagen"value={imagen}>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}/>
                    
               </div>
               <div>
               <button id="btnRegistro" onClick={() => postData()}>Enviar</button> 
               </div>
           </form>
        </div>
    )
}
