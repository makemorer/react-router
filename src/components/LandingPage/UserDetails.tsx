import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const params = useParams()
    const userId = params.userId
  return (
    <React.Fragment>
        {
           userId? `This is User ${userId} Details`: `No User Clicked Yet`
        }
    </React.Fragment>
  )
}
