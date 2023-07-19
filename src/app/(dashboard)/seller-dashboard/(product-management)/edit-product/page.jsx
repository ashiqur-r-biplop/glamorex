import LoadingSpinner from '@/app/(customers)/components/HelpingCompo/LoadingSpinner';
import React from 'react';

const EditProductPage = () => {
    if('loading'){
        return <div className='h-screen flex items-center justify-center'><LoadingSpinner></LoadingSpinner></div>
    }
    return (
        <div>
            This is edit page!
        </div>
    );
};

export default EditProductPage;