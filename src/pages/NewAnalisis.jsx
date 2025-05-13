import React, { useState } from 'react';
import Lefter from '../components/Lefter';

const NewAnalisis = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      <Lefter onVisibilityChange={setIsBlurred} />
      <div className={`flex flex-row w-full min-h-full transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
        <div className='flex flex-col p-10 w-full'>
          <div className='flex flex-row mb-10 w-full items-center'>
            <div className='w-1/2'>
              <h1 className='text-3xl'>Nuevo análisis</h1>
              <p className=''>Creación de nuevos análisis</p>
            </div>
          </div>
          <div className='flex flex-col w-full border-2 border-5th rounded-2xl shadow-md p-10'>
            <input type='text' placeholder='Id de la persona' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type='date' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type='text' placeholder='Id del laboratorio' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type='text' placeholder='Descripción del análisis' className='p-2 rounded-xl border-2 border-white my-3 focus:outline-none' />
            <input type="submit" placeholder='Guardar' className='p-2 rounded-xl border-2 border-white mt-2 focus:outline-none bg-2nd text-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnalisis;