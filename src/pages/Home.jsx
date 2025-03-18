import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Header />
            <div className='bg-white h-dvh flex flex-col items-center'>
                <div className='flex h-1/9 w-full'>
                    <div className='flex flex-col ml-10 h-full justify-end'>
                        <h1 className='font-bold text-3xl'>¡Hola Nombre de usuario!</h1>
                        <h2 className='text-xl'>¿En qué podemos ayudarte hoy?</h2>
                    </div>
                    <div className='flex ml-auto items-end mr-10 h-full'>
                        <h1 className='text-xl mb-4'>Notificaciónes</h1>
                    </div>
                </div>
                <div className='flex h-8/9 w-full p-10'>
                    <div className='flex flex-col h-full w-1/3 mr-10'>
                        <div className='bg-5th h-7/8 rounded-2xl'>Resumen de analisis</div>
                        <div className='bg-5th h-1/8 mt-10 rounded-2xl'>Acerca de nosotros</div>
                    </div>
                    <div className='flex flex-col h-full w-2/3'>
                        <div className='h-1/2 bg-5th rounded-2xl'>crear nuevo analisis</div>
                        <div className='flex h-1/2 mt-10'>
                            <div className='h-full w-1/2 bg-5th mr-10 rounded-2xl'>Lista de analisis</div>
                            <div className='flex flex-col h-full w-1/2'>
                                <div className='h-2/3 w-full bg-5th rounded-2xl'>Notificaciones</div>
                                <div className='h-1/3 mt-10 bg-red-600 rounded-2xl'>Salir</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
