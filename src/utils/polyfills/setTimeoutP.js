function createSetTimeoutPolyfill() {
  let uniqueId = 0;
  let timeOutMap = {};
  function setTimeoutPolyfill(callbackFn, delay = 0, ...args) {
    const ID = uniqueId++;
    let isExecuted = false;
    timeOutMap[ID] = setInterval(() => {
      if (!isExecuted) {
        callbackFn(...args);
        isExecuted = true;
        clearTimeoutPolyfill(ID);
      }
    }, delay);
    return ID;
  }
  function clearTimeoutPolyfill(intervalID) {
    clearInterval(timeOutMap[intervalID]);
    delete timeOutMap[intervalID];
  }
  return {
    setTimeoutPolyfill,
    clearTimeoutPolyfill,
  };
}

const { setTimeoutPolyfill, clearTimeoutPolyfill } = createSetTimeoutPolyfill();
function greet() {
  console.log("hello");
}
const pid = setTimeoutPolyfill(greet, 2000);
clearTimeoutPolyfill(pid);
