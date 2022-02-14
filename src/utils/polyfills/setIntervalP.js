function createSetIntervalPolyfill() {
  let uniqueId = 0;
  let intervalMap = {};

  function setIntervalPolyfill(callbackFn, delay = 0, ...args) {
    var ID = uniqueId++;
    function repeat() {
      intervalMap[ID] = setTimeout(() => {
        callbackFn(...args);
        if (intervalMap[ID]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return ID;
  }

  function clearIntervalPolyfill(intervalID) {
    clearTimeout(intervalMap[intervalID]);
    delete intervalMap[intervalID];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } =
  createSetIntervalPolyfill();

function greet() {
  count++;
  console.log("hello");
  if (count > 3) {
    clearIntervalPolyfill(pid);
  }
}

let count = 0;
const pid = setIntervalPolyfill(greet, 1000);
