import React, { useState } from 'react';
import Lefter from '../components/Lefter';

const NewAnalisis = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      <Lefter onVisibilityChange={setIsBlurred} />
      <div className={`flex flex-row w-full min-h-full transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
        <div className='flex flex-col w-1/2 p-5 justify-center'>
          <h1 className='text-4xl text-1st font-semibold'>Crear análisis nunca fue tan fácil</h1>
          <p className='mt-2'>Solo tienes que completar los siguientes campos con la información requerida y, en cuestión de segundos, tendrás un informe adaptado a tus necesidades. ¡Empieza ahora y obtén resultados precisos sin complicaciones!</p>
        </div>
        <div className='flex bg-linear-to-tr from-1st to-4th w-1/2 justify-center items-center text-white'>
          <form className='flex flex-col w-2/3 p-5 border-2 border-white rounded-2xl shadow-xl'>
            <p className='text-2xl'>Nuevo análisis</p>
            <p className='font-light'>Rellene los campos</p>
            <input type='text' placeholder='Seleccionar paciente' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type='date' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type='text' placeholder='Descripción del análisis' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type='text' placeholder='Análisis a realizar' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none'/>
            <input type="submit" placeholder='Guardar' className='p-2 rounded-xl border-2 border-white mt-2 focus:outline-none'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAnalisis;