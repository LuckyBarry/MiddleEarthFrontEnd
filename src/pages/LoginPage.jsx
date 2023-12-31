import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

    const { handleLogin } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        const payload = { email, password }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            if (response.status === 400) {
                const parsed = await response.json()
                throw new Error(parsed.message)
            }
            if (response.status === 200) {
                const parsed = await response.json()
                handleLogin(parsed.token)
                navigate('/AllPokerEventsPage')
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="loginPageContainer">
            <h1 className='Signup'>Login</h1>
            <form onSubmit={handleSubmit}>
                <label className='signuplabels'>
                    Email:
                    <input value={email} onChange={event => setEmail(event.target.value)} required type="email" />
                </label>
                <label className='signuplabels'>
                    Password:
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        type='password'
                    />
                </label>
                <button type='submit'>Log In</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
    );



    // return (
    //     <div className='loginPageContainer'>
    //         <h1 >Login</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 email:
    //                 <input value={email} onChange={event => setEmail(event.target.value)} required type="email" />
    //             </label>
    //             <label>
    //                 Password
    //                 <input
    //                     value={password}
    //                     onChange={event => setPassword(event.target.value)}
    //                     required
    //                     type='password'
    //                 />
    //             </label>
    //             <button type='submit'>Log In</button>
    //             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    //         </form>
    //     </div>
    // )
}

export default LoginPage