import { useEffect, useRef, useState } from "react";
const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const timerId = useRef(null);
  const onStartHandler = () => {
    timerId.current = setInterval(() => {
      setMilliSeconds((second) => second + 10);
    }, 10);
    setIsStarted(true);
  };
  const onStopHandler = () => {
    clearInterval(timerId.current);
    setIsStarted(false);
  };
  const onRestartHandler = () => {
    setMilliSeconds(0);
    setSecond(0);
    setIsStarted(false);
    clearInterval(timerId.current);
  };

  useEffect(() => {
    if (milliSeconds === 1000) {
      setSecond((second) => second + 1);
      setMilliSeconds(0);
    }
  }, [milliSeconds]);

  return (
    <div className="App">
      <p>
        {second}:{milliSeconds}
      </p>
      {!isStarted && <button onClick={onStartHandler}>Start</button>}
      {isStarted && <button onClick={onStopHandler}>Stop</button>}
      <button onClick={onRestartHandler}>reset</button>
    </div>
  );
};

export default StopWatch;
