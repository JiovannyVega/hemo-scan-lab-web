import React, { useState } from 'react';
import Lefter from '../components/Lefter';

const PatientList = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    return (
    <div className="relative w-full overflow-hidden">
        <Lefter onVisibilityChange={setIsBlurred} />
        <div className={`flex flex-row w-full min-h-full transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
            <div className='flex flex-col p-10 w-full'>
                <div className='flex flex-row mb-10 w-full items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-3xl'>Lista de Pacientes</h1>
                        <p className=''>Aquí encontrarás la lista de pacientes registrados</p>
                    </div>
                    <form className='w-1/2 flex justify-end items-center'>
                        <input type='text' placeholder='Buscar por nombre o CURP' className='w-full p-2 border-2 border-5th rounded-2xl shadow-md'/>
                    </form>
                </div>
                <div className='w-full'>
                    <table className='w-full border-2 border-5th rounded-2xl shadow-md'>
                        <thead className='bg-5th text-white'>
                            <tr>
                                <th className='p-5 border-b-2 border-5th'>Nombre completo</th>
                                <th className='p-5 border-b-2 border-5th'>CURP</th>
                                <th className='p-5 border-b-2 border-5th'>Fecha de nacimiento</th>
                                <th className='p-5 border-b-2 border-5th'>Sexo</th>
                                <th className='p-5 border-b-2 border-5th'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className='border-b-2 border-5th'>
                                <td className='p-5'>Juan Pérez</td>
                                <td className='p-5'>PEJU850101HDFRZN09</td>
                                <td className='p-5'>1985-01-01</td>
                                <td className='p-5'>Masculino</td>
                                <td className='p-5'>
                                    <button className='text-green-500'>Ver historial</button>
                                </td>
                            </tr>
                            <tr className='border-b-2 border-5th'>
                                <td className='p-5'>María López</td>
                                <td className='p-5'>LOMA920202MDFRZR03</td>
                                <td className='p-5'>1992-02-02</td>
                                <td className='p-5'>Femenino</td>
                                <td className='p-5'>
                                    <button className='text-green-500'>Ver historial</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-5'>Carlos García</td>
                                <td className='p-5'>GACA950303HDFRZN07</td>
                                <td className='p-5'>1995-03-03</td>
                                <td className='p-5'>Masculino</td>
                                <td className='p-5'>
                                    <button className='text-green-500'>Ver historial</button>
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

export default PatientList;