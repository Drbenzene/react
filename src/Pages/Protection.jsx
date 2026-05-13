import React from 'react'
import { Navigate, useSearchParams, useLocation } from 'react-router-dom'

function Protection({children}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()

    const password = searchParams.get('password'); 

    console.log(password, "THE PASSWORD")

    if(!password || password !== '12345'){
        return <Navigate to='/login' state={{
            from:  location
        }} />
    }

    return children
}

export default Protection