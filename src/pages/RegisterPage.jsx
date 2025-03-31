import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <>
            <div className='bg-linear-to-tr from-[#284B63] to-[#4f738d] h-screen flex items-center justify-center text-white'>
                <div className='flex h-1/2 w-1/2 items-center p-25 text-7xl font-semibold'> 
                    <h1>Bienvenido a HemoScan AI</h1>
                </div>
                <div className='flex flex-col h-4/5 w-2/5 bg-[#315771] ml-auto mr-25 rounded-3xl p-20 justify-center drop-shadow-xl'>
                    <h1 className='text-4xl font-bold'>Registrate gratis</h1>
                    <Link to="/" className='text-lg mt-3'>
                        <p className='text-lg mt-3'>Ya tengo una cuenta</p>
                    </Link>
                    <form className='flex flex-col mt-3'>
                        <input type='text' placeholder='Usuario' className='p-4 rounded-xl border-2 my-3 border-white' />
                        <input type='text' placeholder='Correo electrónico' className='p-4 rounded-xl border-2 my-3 border-white' />
                        <input type='text' placeholder='Confirma tu correo' className='p-4 rounded-xl border-2 my-3 border-white' />
                        <input type='password' placeholder='Contraseña' className='p-4 rounded-xl border-2 my-3 border-white' />
                        <button className='bg-1st p-4 my-3 rounded-xl text-lg shadow-xl'>Registrarme</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage