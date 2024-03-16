import React from 'react'
import dice1 from '../../dice-1.png'
import dice2 from '../../dice-2.png'
import { Link, NavigateFunction, Outlet, useNavigate, useParams } from 'react-router-dom'

export const ButtonWithNoborder = {
    border: "none"
}
export default function About(){
    const navigate: NavigateFunction = useNavigate()
    const users = ["Ubong", "Uyime"]
    let uzex
    const params = useParams()
    const userId = params.userId
    users.map((user, index) =>
            {
                if(index === 1){
                    return (
                        uzex = <React.Fragment><img src={dice1} className="dice" alt="user-img"/><Link to="1">User Details</Link><h3>User{userId}: {user}</h3></React.Fragment>
                    )
                }else{
                    return (
                        uzex = <React.Fragment><img src={dice2} className="dice" alt="user-img"/><Link to="2">User Details</Link><h3>User{userId}: {user}</h3></React.Fragment>
                    )

                } 
            })
            return(
                <React.Fragment>
                    <h2>About Page</h2>
                    <Link to='/'>Home &gt; &gt;</Link>
                    <button onClick={()=>navigate(-1)} style={ButtonWithNoborder}>Go Back</button>
                    <div>
                        {uzex}
                    </div>
                    <Outlet/>
                </React.Fragment>
            )
}
