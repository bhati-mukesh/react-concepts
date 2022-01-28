import withCounter from "./withCounter";

const ButtonCounter = withCounter((props) => {
  const { count, setCount } = props;
  return (
    <div>
      click count : {count}
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginLeft: "20px", padding: "5px" }}
      >
        click
      </button>
    </div>
  );
});

const HoverCounter = withCounter((props) => {
  const { count, setCount } = props;
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      Hover Count : {count}
      <span
        onMouseEnter={() => setCount(count + 1)}
        style={{
          marginLeft: "20px",
          border: "1px solid gray",
          padding: "5px",
        }}
      >
        Hover Me
      </span>
    </div>
  );
});

const Counter = () => {
  return (
    <>
      <ButtonCounter />
      <HoverCounter />
    </>
  );
};

export default Counter;
