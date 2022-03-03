import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/v1/category/'

export const Edit = () => { 
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [state, setState] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name:name,  description:description, state:state
        })
        navigate('/category')
    }
    
    useEffect( () =>{
        const getCategoryById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setDescription(response.data.description)
            setState(response.data.state)
        }
        getCategoryById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Edit Category</h3>
        <form onSubmit={update}>

        <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            
            <div className='mb-3'>
                <label className='form-label'>State</label>
                <input 
                    value={state}
                    onChange={ (e)=> setState(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}