import { useEffect, useState } from 'react';

const useJsonFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, {signal});

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setData(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
      setLoading(false);
    };
  }, [url]);

  return [data, loading, error];
};

export default useJsonFetch;
