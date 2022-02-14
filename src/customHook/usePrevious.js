import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const previousRef = useRef();
  useEffect(() => {
    previousRef.current = value;
  }, [value]);
  return previousRef.current;
};

export default usePrevious;

// How to use

// export default function App() {
//   const [set, setState] = useState(0);
//   const previous = usePrevious(set);
//   return (
//     <div className="App">
//       <p>
//         set: {set} | prev : {previous}
//       </p>
//       <h1 onClick={() => setState(set + 1)}>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
