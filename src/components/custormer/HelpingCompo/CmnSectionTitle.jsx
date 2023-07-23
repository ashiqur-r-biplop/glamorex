import React from 'react';

const CmnSectionTitle = ({title, subtitle}) => {
    return (
        <div className='w-2/6 sm:w-4/6 lg:w-3/6 mx-auto space-y-2 text-center my-10 relative'>
            <h2 className='my-title'>{title}</h2>
            <p>{subtitle}</p>
            <div className='h-px w-20 bg-orange-500 absolute top-full left-1/2 -translate-x-1/2'></div>
        </div>
    );
};
export default CmnSectionTitle;