import BasicProvider from '@/app/utils/basicprovider';
import { useState, useEffect } from 'react';

const useAllCategories = () => {
    const [categotyData, setCategoty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const response: any = await new BasicProvider(`public/category`).getRequest();

                if (response?.status === "success")
                    setCategoty(response?.data || []);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllCategories();
    }, []);

    return categotyData;
};

const useGetByIdSlugCategories = (id: any) => {
    const [categotyData, setCategoty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchByIdOrSlug = async () => {
            try {
                const response: any = await new BasicProvider(`public/category/show/${id}`).getRequest();

                if (response?.status === "success")
                    setCategoty(response?.data || []);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchByIdOrSlug();
    }, [id]);

    return categotyData;
};

export { useAllCategories, useGetByIdSlugCategories };