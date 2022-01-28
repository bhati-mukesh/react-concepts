const { useState } = require("react");

const withCounter = (Component) => {
  return function (props) {
    const [count, setCount] = useState(0);
    return <Component {...props} count={count} setCount={setCount} />;
  };
};

export default withCounter;
