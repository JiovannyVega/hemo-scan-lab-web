import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../api/services/authService'
import { handleApiError } from '../api/utils/apiUtils'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await login({ email, password })
            console.log('Usuario autenticado:', user)
            navigate('/home') // Redirigir al usuario a la página de home después de iniciar sesión
        } catch (error) {
            handleApiError(error) // Manejar el error de la API
        }
    };
    return (
        <>
            <div className='bg-linear-to-tr from-1st to-4th h-screen flex items-center justify-center text-white'>
                <div className='flex h-1/2 w-1/2 items-center p-25 text-7xl font-semibold'> 
                    <h1>Bienvenido a HemoScan AI</h1>
                </div>
                <div className='flex flex-col h-4/5 w-2/5 bg-2nd ml-auto mr-25 rounded-3xl p-20 justify-center drop-shadow-xl'>
                    <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
                    <Link to="/register" className='text-lg mt-3'>
                        <p className='text-lg mt-3'>No tengo una cuenta</p>
                    </Link>
                    <form className='flex flex-col mt-3' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Correo electrónico' className='p-4 rounded-xl border-2 my-3 ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type='password' placeholder='Contraseña' className='p-4 rounded-xl border-2 my-3 border-white' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p>¿Olvidaste tu Contraseña?</p>
                        <button type='submit' className='p-4 my-3 rounded-xl bg-1st shadow-xl text-lg'>Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage