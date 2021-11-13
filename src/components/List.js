import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import '../styles/List.css';
import {url} from '../helpers/url';



export const List = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }


    const deleteData = (id) => {
        axios.delete(url+id)
        .then(response => {
            getData();
          console.log(response.data)
       })
       .catch(error => {
           console.log(error);
       })
   }


   
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre Completo</th>
                    <th>Numero de Camiseta</th>
                    <th>Equipo</th>
                    <th>Edad</th>
                    <th>Imagen</th>
                    </tr>
                </thead>
                
                 <tbody>
                 
                     
                     {
                         registro.map(r => (
                             <tr key={r.id}>
                                 <td>{r.nombre}</td>
                                 <td>{r.numeroCamiseta}</td>
                                 <td>{r.equipo}</td>
                                 <td>{r.edad}</td>
                                 <td>{r.imagen}</td>
                               
                                 
                                 <td><button onClick={() => deleteData(r.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 
                   
                 </tbody>
            </table>
        </div>
    )
}
