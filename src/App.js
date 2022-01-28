import "./App.css";
import Counter from "./hoc/counter";
import FetcherExample from "./renderProps/fetcher-1";
import OTPScreen from "./components/otpScreen";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <FetcherExample /> */}
      {/* <OTPScreen /> */}
    </div>
  );
}

export default App;
