import { useCallback, useState } from "react";

const myDebounce = (cb, delay) => {
  let timmer = null;
  return function (...args) {
    if (timmer) clearTimeout(timmer);
    timmer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default function App() {
  const [searchValue, setSearchValue] = useState("");

  const apiCall = useCallback(
    myDebounce((e) => {
      console.log("Searching...", e.target.value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    apiCall(e);
  };

  return (
    <div className="App">
      <p>Example of Debouncing</p>
      <input value={searchValue} onChange={handleChange} />
    </div>
  );
}
