import './Spinner.css';
import React from 'react';


const Spinner=()=>{
return(
    <div className='flex flex-col items-center space-y-2'>
        <div className="custom-loader"></div>
        <p className='text-lg text-slate-700 font-semibold'>Loading...</p>
    </div>
);
}
export default Spinner;