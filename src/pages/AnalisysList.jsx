import React, { useState, useEffect } from 'react';
import Lefter from '../components/Lefter';
import { getAllAnalysis } from '../api/services/analysisService';

const AnalisysList = () => {
    const [isBlurred, setIsBlurred] = useState(false);
    const [analysis, setAnalysis] = useState([]);

    useEffect(() => {
        const fetchAnalysis = async () => {
            try {
                const response = await getAllAnalysis();
                setAnalysis(response.data);
            } catch (error) {
                console.error('Error fetching analyses:', error);
            }
        };
        fetchAnalysis();
    }, []);

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
                                <th className='p-5 border-b-2 border-5th'>Paciente</th>
                                <th className='p-5 border-b-2 border-5th'>Laboratorio</th>
                                <th className='p-5 border-b-2 border-5th'>Fecha del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Estado del análisis</th>
                                <th className='p-5 border-b-2 border-5th'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {analysis.map((analysis) => (
                                <tr key={analysis.id} className='border-b-2 border-5th'>
                                    <td className='p-5'>{analysis.id}</td>
                                    <td className='p-5'>{analysis.person.first_name} {analysis.person.last_name}</td>
                                    <td className='p-5'>{analysis.lab.name}</td>
                                    <td className='p-5'>{analysis.date}</td>
                                    <td className='p-5'>{analysis.status}</td>
                                    <td className='p-5'>
                                        <button className='mr-2 text-blue-500'>Editar</button>
                                        <button className='mr-2 text-green-500'>Ver detalles</button>
                                        <button className='text-yellow-500'>Cambiar estado</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AnalisysList;