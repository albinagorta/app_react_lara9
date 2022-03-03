import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/v1'

export const Show = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const response = await axios.get(`${endpoint}/categories`)
        setCategories(response.data)
        //console.log(response.data)
    }

    const deleteCategory = async (id) => {
        await axios.delete(`${endpoint}/category/${id}`)
        getAllCategories()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/category/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr><th>Name</th>
                        <th>Description</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat) => (
                        <tr key={cat.id}>
                            <td> {cat.name} </td>
                            <td> {cat.description} </td>
                            <td> {cat.state} </td>
                            <td>
                                <Link to={`/category/edit/${cat.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteCategory(cat.id)} className='btn btn-danger'>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}