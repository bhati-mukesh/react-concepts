const Node = ({ item, left }) => {
  return (
    <>
      <p
        style={{
          marginLeft: `${left + 15}px`,
          background: "gray",
          display: "inline",
        }}
      >
        {item.name}
      </p>
      <br />
    </>
  );
};

export default Node;
