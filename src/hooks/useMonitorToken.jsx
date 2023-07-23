import React, { useEffect, useState } from 'react';

const useMonitorToken = () => {
    const [storedToken, setStoredToken] = useState(null)
    const [control, setControl] = useState(true)

    useEffect(() => {
        const existToken = localStorage.getItem('access-token')
        setStoredToken(existToken)
    }, [control])

    return { storedToken, setStoredToken, control, setControl }
};

export default useMonitorToken;