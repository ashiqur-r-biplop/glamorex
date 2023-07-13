import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useIpApi = () => {
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
      const fetchIpAddress = async () => {
        try {
          const response = await axios.get('https://api.ipify.org/?format=json');
          setIpAddress(response.data.ip);
        } catch (error) {
          console.error('Error fetching IP address:', error);
        }
      };
  
     fetchIpAddress()
    }, []);
    return {ipAddress}
};

export default useIpApi;