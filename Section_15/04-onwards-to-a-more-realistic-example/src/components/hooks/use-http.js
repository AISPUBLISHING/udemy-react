import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sentRequest = useCallback(async (arg, convertTask) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(arg.url, {
        method: arg.method ? arg.method : "GET",
        headers: arg.headers ? arg.headers : {},
        body: arg.headers ? JSON.stringify(arg.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      convertTask(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);

  return {
    isLoading,
    error,
    sentRequest,
  };
};
export default useHttp;
