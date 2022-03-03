import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/v1/category'

export const Create = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [state, setState] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { name:name,  description:description, state:state })
        navigate('/category')
    }

    return (
        <div>
            <h3>Create Category</h3>
            <form onSubmit={store}>
            <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>State</label>
                    <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}
