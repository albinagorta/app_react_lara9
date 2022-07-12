import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/v1/categoria'
const headers = { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer 2|HQumHfQ0PQXXscc9tBDjr3xOWCe0uRhkGD65Galv'
};

export const Create = () => {
    const [nombre, setNombre] = useState('')
    const [in_estado, setIn_Estado] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { nombre, in_estado },{headers})
        navigate('/category')
    }

    return (
        <div>
            <h3>Crear categoria</h3>
            <form onSubmit={store}>
            <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Estado</label>
                    <input
                        value={in_estado}
                        onChange={(e) => setIn_Estado(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}
