import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useContext(AuthContext)

    if (!isLoading && !isAuthenticated) {
        return <Navigate to='/LoginPage' />
    }

    return isLoading ? <h1>Loading...</h1> : <>{children}</>
}

export default PrivateRoute