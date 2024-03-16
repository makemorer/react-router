import React from 'react'
import {Link, NavigateFunction, useNavigate} from 'react-router-dom'
import { ButtonWithNoborder } from './About'

// type InputProp 

const Contact = () =>{
    const navigate: NavigateFunction = useNavigate()
    return (
        <React.Fragment>
            <h3>Contact Page</h3>
            <Link to='/'>Home</Link>
            <button onClick={()=>navigate(-1)} style={ButtonWithNoborder}>Go Back</button>
            <form>
                <input placeholder="your name here" type="text" required/>
                <input placeholder="your email address here" type="email" required/><br/>
                <input placeholder="your phone number" type="number" required/>
                <label>[Optional]</label>
                <input type="file"/><br/>
                <textarea></textarea>
            </form>
        </React.Fragment>
    )
}
export default Contact