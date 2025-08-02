import { useState, useEffect } from "react";

export default function useFetch<T>(fnFetch: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const response = async () => {
            try {
                const data = await fnFetch();
                setLoading(false);
                setData(data);
            } catch (error) {
                setError(error as unknown);
            } finally {
                setLoading(false);
            }
        };
        response();
    }, [fnFetch]);

    return { data, error, loading };
}
