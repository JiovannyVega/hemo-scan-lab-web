import React, { useState } from 'react';
import Lefter from '../components/Lefter';

const AnalisysList = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    return (
    <div className="relative w-full overflow-hidden">
        <Lefter onVisibilityChange={setIsBlurred} />
        <div className={`flex flex-row w-full min-h-full transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
            <div className='flex flex-col p-10 w-full'>
                <div className='flex flex-row mb-10 w-full items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-3xl'>Lista de análisis</h1>
                        <p className=''>Aquí encontrarás la lista de análisis actuales</p>
                    </div>
                    <form className='w-1/2 flex justify-end items-center'>
                        <input type='text' placeholder='Buscar análisis' className='w-full p-2 border-2 border-5th rounded-2xl shadow-md'/>
                    </form>
                </div>
                <div className='w-full'>
                    <table className='w-full border-2 border-5th rounded-2xl shadow-md'>
                        <thead className='bg-5th text-white'>
                            <tr>
                                <th className='p-5 border-b-2 border-5th'>ID del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Nombre del paciente</th>
                                <th className='p-5 border-b-2 border-5th'>Fecha del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Estado del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className='border-b-2 border-5th'>
                                <td className='p-5'>1</td>
                                <td className='p-5'>Juan Pérez</td>
                                <td className='p-5'>2023-10-01</td>
                                <td className='p-5 bg-green-600'>Completado</td>
                                <td className='p-5'>
                                    <button className='mr-2 text-blue-500'>Editar</button>
                                    <button className='mr-2 text-green-500'>Ver detalles</button>
                                    <button className='text-yellow-500'>Cambiar estado</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-5th'>
                                <td className='p-5'>2</td>
                                <td className='p-5'>María López</td>
                                <td className='p-5'>2023-10-02</td>
                                <td className='p-5 bg-red-500'>Pendiente</td>
                                <td className='p-5'>
                                    <button className='mr-2 text-blue-500'>Editar</button>
                                    <button className='mr-2 text-green-500'>Ver detalles</button>
                                    <button className='text-yellow-500'>Cambiar estado</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-5'>3</td>
                                <td className='p-5'>Carlos García</td>
                                <td className='p-5'>2023-10-03</td>
                                <td className='p-5 bg-amber-500'>En proceso</td>
                                <td className='p-5'>
                                    <button className='mr-2 text-blue-500'>Editar</button>
                                    <button className='mr-2 text-green-500'>Ver detalles</button>
                                    <button className='text-yellow-500'>Cambiar estado</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AnalisysList