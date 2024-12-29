// hooks/useRegions.js
import BasicProvider from '@/app/utils/basicprovider';
import { useState, useEffect } from 'react';

const useCountryRegions = () => {
    const [countryData, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response: any = await new BasicProvider(`public/region/country`).getRequest();
            
                if (response?.status === "success")
                    setCountry(response?.data || []);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, []);

    return { countryData, loading, error };
};

const useStateRegions = (id: any) => {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchState = async () => {
            try {
                const response: any = await new BasicProvider(`public/region/children/${id}`).getRequest();
                setStates(response?.data || []);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchState();
    }, [id]);

    return { states, loading, error };
};
const useCityRegions = (id: any) => {
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response: any = await new BasicProvider(`public/region/children/${id}`).getRequest();
                if (response?.status === "success") {

                    setCity(response?.data || []);
                }

            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCity();
    }, [id]);

    return { city, loading, error };
};

export { useCountryRegions, useStateRegions, useCityRegions };
