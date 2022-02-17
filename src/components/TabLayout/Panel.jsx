const Panel = ({ index, value, children }) => {
  return index === value && <div className="panel-container">{children}</div>;
};

export default Panel;
