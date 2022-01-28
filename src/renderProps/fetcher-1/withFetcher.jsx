import axios from "axios";
import { useEffect, useState } from "react";

const WithFetch = ({ url, data, headers, method, children }) => {
  const [complete, setComplete] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({ url, method, data, headers });
        setResponse(res.data);
      } catch (error) {
        console.log("error", error);
        setError(error.response);
      } finally {
        setComplete(true);
      }
    };
    fetchData();
  }, [url, method, data, headers]);

  if (!complete) return <p>Loading...</p>;

  return complete && children(response, error);
};

export default WithFetch;
