import '../../style/Login.css'
import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// const endpoint = 'http://localhost:8000/api/v1'
// const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': 'Bearer 2|HQumHfQ0PQXXscc9tBDjr3xOWCe0uRhkGD65Galv'
// };

export const Login = () => {
    return (
        <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
    )
}