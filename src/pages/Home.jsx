import React from 'react'
import { Link } from 'react-router-dom' 

function Home() {
    return (
        <>
            <div className='bg-white flex w-full flex-col items-center'>
                <div className='flex h-1/9 w-full'>
                    <div className='flex flex-col ml-10 h-full justify-end'>
                        <h1 className='font-bold text-3xl'>¡Hola Nombre de usuario!</h1>
                        <h2 className='text-xl'>¿En qué podemos ayudarte hoy?</h2>
                    </div>
                    <div className='flex ml-auto items-end mr-10 h-full'>
                        <h1 className='text-xl mb-4'>Notificaciónes</h1>
                    </div>
                </div>
                <div className='flex flex-grow w-full p-10'>
                    <div className='flex flex-col h-full w-1/3 mr-10'>
                        <div className='flex flex-col bg-5th h-7/8 rounded-2xl p-5 transform transition-transform duration-300 hover:scale-104 shadow-lg'>
                            <h1 className='text-3xl'>Resumen de análisis</h1>
                            <div className='mt-5'>
                                <p>Hola, aún no tienes análisis pendientes, quieres empezar uno?</p>
                            </div>
                        </div>
                        <Link to="/about" className='bg-5th h-1/8 mt-10 rounded-2xl p-5 transform transition-transform duration-300 hover:scale-104 shadow-lg'>
                            <div>
                                <h1 className='text-xl font-semibold'>About us</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col h-full w-2/3'>
                        <Link to="/newanalisis" className='h-1/2 bg-5th rounded-2xl p-5 transform transition-transform duration-300 hover:scale-104 shadow-lg'>
                            <div className=''>
                                <h1 className='text-3xl'>Crear nuevo análisis</h1>
                                <div className='p-5 flex h-auto w-auto mt-4 rounded-2xl'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/7163/7163714.png" alt="Crear análisis" className='h-30'/>
                                    <p className='ml-10 text-justify'>Explora patrones, tendencias y resultados clave a partir de la información procesada.  
                                    Usa las herramientas disponibles para generar informes detallados y tomar decisiones informadas.</p>
                                </div>
                            </div>
                        </Link>
                        <div className='flex h-1/2 mt-10'>
                            <div className='h-full w-1/2 bg-5th mr-10 rounded-2xl p-5 transform transition-transform duration-300 hover:scale-104 shadow-lg'>
                                <h1 className='text-3xl'>Lista de análisis</h1>
                                <div className='mt-5'>
                                    <p>No tienes análisis disponibles</p>
                                </div>
                            </div>
                            <div className='flex flex-col h-full w-1/2'>
                                <div className='h-3/4 w-full bg-5th rounded-2xl p-5 transform transition-transform duration-300 hover:scale-104 shadow-lg'>
                                    <h1 className='text-3xl'>Notificaciones</h1>
                                    <div className='mt-5'>
                                        <p>No tienes Notificaciones pendientes</p>
                                    </div>
                                </div>
                                <Link to="/" className='flex h-1/4 mt-10 bg-red-500 rounded-2xl items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-104'>
                                    <div>
                                        <p className='text-white text-xl font-semibold'>Cerrar sesión</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
