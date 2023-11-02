import { useState } from "react";
import API from "../service/globalapi.js";

const UseApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const call = async (payload, token) => {
    setResponse(null);
    setError("");
    setIsLoading(true);
    try {
      let res = await API(urlObject, payload, type);
      setResponse(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { call, response, error, isLoading };
};

export default UseApi;