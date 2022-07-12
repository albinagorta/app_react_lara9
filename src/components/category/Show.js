import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/v1'
const headers = { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer 2|HQumHfQ0PQXXscc9tBDjr3xOWCe0uRhkGD65Galv'
};

export const Show = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const response = await axios.get(`${endpoint}/categoria`, { headers });
        setCategories(response.data.data);
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/category/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Fecha Creacion</th>
                        <th>Usuario Creacion</th>
                        <th>Fecha Actualizacion</th>                        
                        <th>Usuario Actualizacion</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat) => (
                        
                        <tr key={cat.id}>
                            <td> {cat.id} </td>
                            <td> {cat.nombre} </td>
                            <td> {cat.fh_crea} </td>
                            <td> {cat.user_crea.nombre} </td>                            
                            <td> {cat.fh_update} </td>
                            <td> {(cat.user_update)?cat.user_update.nombre:''} </td>
                            <td> {cat.in_estado} </td>
                            <td>
                                <Link to={`/category/edit/${cat.id}`} className='btn btn-warning'>Edit</Link>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}