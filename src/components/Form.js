
import '../styles/Form.css';
import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';


export const Form = () => {

    const [Jugadores, setJugadores] = useState({
        Nombre: '',
        numeroCamiseta: '',
        Equipo: '',
        Edad: '',
        Imagen: ''
    })

    const {Nombre,numeroCamiseta,Equipo,Edad,Imagen} = Jugadores;

    const postData = () => {
        axios.post(url,Jugadores)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
        
   }

   const handleChanged = ({target}) => {
    setJugadores({
      ...Jugadores,
      [target.Nombre]: target.value
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
                   <input id="inputNombre" value={Nombre} onChange={handleChanged}/>
               </div>
               
                  
               <div>
                   <label>Numero Camiseta</label>
                   <input id="inputnumeroCamiseta" value={numeroCamiseta} type="number" name="numeroCamiseta"/>
               </div>
               <div>
                   <label>Equipo</label>
                   <input id="inputEquipo" type="text" name="Equipo" value={Equipo} onChange={handleChanged}/>
               </div>
             
               <div>
                   <label>Edad</label>
                   <input id="inputEdad" type="number" name="Edad" value={Edad} onChange={handleChanged}/>
               </div>
               <div>
                   <label value={Imagen}>Imagen</label>
               
                    
               </div>
               <div>
               <button onClick={() => postData()} id="btnRegistro">Enviar</button>  
               </div>
           </form>
        </div>
    )
}
