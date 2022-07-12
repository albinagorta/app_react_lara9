import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/v1/categoria/'
const headers = { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer 2|HQumHfQ0PQXXscc9tBDjr3xOWCe0uRhkGD65Galv'
};

export const Edit = () => { 
    const [nombre, setNombre] = useState('')
    const [in_estado, setIn_Estado] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, 
                {
                    nombre:nombre,  
                    in_estado: in_estado
                },
                {
                    headers
                });
        navigate('/category')
    }
    
    useEffect( () =>{
        const getCategoryById = async () => {
            let response = await axios.get(`${endpoint}${id}`,{headers});
            response = response.data.data;
            console.log(response.nombre);
            setNombre(response.nombre);
            setIn_Estado(response.in_estado);
        }
        getCategoryById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Editar Categoria</h3>
        <form onSubmit={update}>

        <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            {/* <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div> */}
            
            <div className='mb-3'>
                <label className='form-label'>Estado</label>
                <input 
                    value={in_estado}
                    onChange={ (e)=> setIn_Estado(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>
    )
}