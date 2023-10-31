import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate() 
    const handleSubmit = async event => {
        event.preventDefault()
        const payload = { email, password }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            if (response.status === 201) {
                const parsed = await response.json()
                console.log(parsed) 
                navigate("/LoginPage")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1 className='Signup'>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label className='signuplabels'>
                    Email:
                    <input value={email} onChange={event => setEmail(event.target.value)} required type="email" />
                </label>
                <label className='signuplabels'>
                    Password
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        type='password'
                    />
                </label>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default SignupPage