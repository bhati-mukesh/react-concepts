import data from "./data/explorerData";
import Folder from "./Folder";
import Node from "./Node";

const Explorer = () => {
  return (
    <>
      {data.isFolder && <Folder data={data} left={0} />}
      {!data.isFolder && <Node item={data} left={0} />}
    </>
  );
};

export default Explorer;
