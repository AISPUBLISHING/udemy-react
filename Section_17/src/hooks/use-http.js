import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(async (arg, fun) => {
    console.log(arg,fun)
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(arg.url, {
        method: arg.method ? arg.method : "GET",
        body: arg.data ? JSON.stringify(arg.data) : null,
        headers: arg.headers ? arg.headers : {},
      });
      if (!response.ok) {
        throw new Error("Error Occur");
      }
      console.log(response)
      const data = await response.json();
      fun(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
