import React, { useState } from 'react';
import Lefter from '../components/Lefter';

const Patient = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    return (
    <div className="relative w-full overflow-hidden">
        <Lefter onVisibilityChange={setIsBlurred} />
        <div className={`flex flex-row w-full min-h-full transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
            <div className='flex flex-col p-10 w-full'>
                <h1 className='text-3xl'>Historial de Análisis de un Paciente</h1>
                <p className=''>Aquí encontrarás la información del paciente y su historial de análisis</p>

                <div className='w-full mt-5 p-5 border-2 border-5th shadow-md'>
                    <h2 className='text-2xl mb-4'>Información del Paciente</h2>
                    <p><strong>Nombre completo:</strong> Juan Pérez</p>
                    <p><strong>CURP:</strong> JUAP890101HDFRNL01</p>
                    <p><strong>Edad:</strong> 34 años</p>
                    <p><strong>Sexo:</strong> Masculino</p>
                </div>

                <div className='w-full mt-10'>
                    <h2 className='text-2xl mb-4'>Lista de Análisis</h2>
                    <table className='w-full border-2 border-5th rounded-2xl shadow-md'>
                        <thead className='bg-5th text-white'>
                            <tr>
                                <th className='p-5 border-b-2 border-5th'>Fecha del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Descripción</th>
                                <th className='p-5 border-b-2 border-5th'>Estado del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className='border-b-2 border-5th'>
                                <td className='p-5'>2023-10-01</td>
                                <td className='p-5'>Análisis de sangre</td>
                                <td className='p-5 bg-green-600'>Completado</td>
                                <td className='p-5'>
                                    <button className='mr-2 text-green-500'>Ver detalles</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-5th'>
                                <td className='p-5'>2023-10-02</td>
                                <td className='p-5'>Análisis de orina</td>
                                <td className='p-5 bg-red-500'>Pendiente</td>
                                <td className='p-5'>
                                    <button className='mr-2 text-green-500'>Ver detalles</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-5'>2023-10-03</td>
                                <td className='p-5'>Análisis de glucosa</td>
                                <td className='p-5 bg-amber-500'>En proceso</td>
                                <td className='p-5'>
                                    <button className='mr-2 text-green-500'>Ver detalles</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Patient;