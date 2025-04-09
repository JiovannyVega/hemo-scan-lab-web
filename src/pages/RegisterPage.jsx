import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { getLabs } from '../api/services/labService'
import { register } from '../api/services/authService'
import { handleApiError } from '../api/utils/apiUtils'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    
    const [labs, setLabs] = useState([])
    const [selectedLab, setSelectedLab] = useState('')
    useEffect(() => {
        const fetchLabs = async () => {
            try {
                const response = await getLabs()
                setLabs(response.data)
            } catch (error) {
                console.error('Error fetching labs:', error)
            }
        }
        fetchLabs()
    }, [])
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
                        <input 
                            type='text' 
                            placeholder='Usuario' 
                            className='p-4 rounded-xl border-2 my-3 border-white focus:outline-none' 
                        />
                        <input 
                            type='text' 
                            placeholder='Correo electrónico' 
                            className='p-4 rounded-xl border-2 my-3 border-white focus:outline-none' 
                        />
                        <input 
                            type='text' 
                            placeholder='Contraseña' 
                            className='p-4 rounded-xl border-2 my-3 border-white focus:outline-none' 
                        />
                        <input 
                            type='password' 
                            placeholder='Confirma tu contraseña' 
                            className='p-4 rounded-xl border-2 my-3 border-white focus:outline-none' 
                        />
                        <select 
                            value={selectedLab}
                            onChange={(e) => setSelectedLab(e.target.value)}
                            className='focus:outline-none'
                        >
                            <option value="" disabled selected>Selecciona tu laboratorio</option>
                            {labs.map((lab) => (
                                <option key={lab.id} value={lab.id} className='text-black'>
                                    {lab.name}
                                </option>
                            ))}
                        </select>
                        <button className='bg-1st p-4 my-3 rounded-xl text-lg shadow-xl'>Registrarme</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage