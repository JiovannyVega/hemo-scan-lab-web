import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Lefter = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  useEffect(() => {
    if (onVisibilityChange) {
      onVisibilityChange(isVisible);
    }
  }, [isVisible, onVisibilityChange]);

  return (
    <>
      <div 
        className={`fixed top-15 bottom-15 left-0 transform transition-transform duration-300 z-20 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className='flex flex-col justify-between items-center border-r-2 border-gray-300 bg-white h-full'
          style={{ gap: 'calc(100% / 10)', padding: '1rem 0' }}
        >
          <Link to="/home" className='transform transition-transform duration-300 hover:scale-120 p-2'>
            <div className='flex flex-col items-center'>
              <img src="src\Icons\Home.webp" alt="Page1" className='h-10 w-10'/>
              <p>Home</p>
            </div>
            
          </Link>
          <Link to="/newanalisis" className='transform transition-transform duration-300 hover:scale-120'>
            <div className='flex flex-col items-center'>
              <img src="src\Icons\New.png" alt="Page2" className='h-10 w-10'/>
              <p>New analisis</p>
            </div>
          </Link>
          <Link to="/analisislist" className='transform transition-transform duration-300 hover:scale-120'>
            <div className='flex flex-col items-center'>
              <img src="src\Icons\List.png" alt="Page3" className='h-10 w-10'/>
              <p>Analisis list</p>
            </div>
          </Link>
          <Link to="/patientlist" className='transform transition-transform duration-300 hover:scale-120'>
            <div className='flex flex-col items-center'>
              <img src="src\Icons\Patients.png" alt="Page4" className='h-10 w-10'/>
              <p>Patients</p>
            </div>
          </Link>
        </div>
      </div>
      <div 
        className="fixed top-0 left-0 h-full w-2 hover:w-4 bg-transparent z-30"
        onMouseEnter={handleMouseEnter}
      />
    </>
  );
};

export default Lefter;