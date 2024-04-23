import { useState,  } from 'react';
import axios, { AxiosError } from 'axios';

const url = import.meta.env.VITE_REACT_APP_API_URL;


const useApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | AxiosError | null>(null);

    const execute = async (method = 'get', params = {}) => {
      setLoading(true);
      setError(null);
  
      try {
        const config = {
          method,
          url,
          params,
        };

        const response = await axios(config);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    return { data, loading, error, execute };
}

export default useApi;
