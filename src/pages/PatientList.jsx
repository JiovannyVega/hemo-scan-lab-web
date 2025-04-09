import React, { useState, useEffect } from 'react';
import Lefter from '../components/Lefter';
import { getAllPersons } from '../api/services/personService'

const PatientList = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    const [patients, setPatients] = useState([])
    
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await getAllPersons()
                setPatients(response.data)
            } catch (error) {
                console.error('Error fetching patients:', error)
            }
        }
        fetchPatients()
    }, [])
    

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
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td className="border border-gray-300 px-4 py-2">{`${patient.first_name} ${patient.last_name}`}</td>
                                    <td className="border border-gray-300 px-4 py-2">{patient.curp}</td>
                                    <td className="border border-gray-300 px-4 py-2">{patient.birth_date}</td>
                                    <td className="border border-gray-300 px-4 py-2">{patient.gender}</td>
                                    <td className="border border-gray-300 px-4 py-2">see Analysis</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PatientList;