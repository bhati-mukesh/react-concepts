import React from "react";
import useFetcher from "./useFetcher";

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);
  error && console.log("error inside Fetcher", error);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong</p>;

  if (!data) return null;

  return children(data);
};
export default Fetcher;
