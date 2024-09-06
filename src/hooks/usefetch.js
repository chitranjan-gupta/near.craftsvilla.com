import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({});

    async function getData(url) {
        setLoading(true);
        setError("");
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        void getData(url)
    }, [url]);

    return {
        loading, data, error
    }
}