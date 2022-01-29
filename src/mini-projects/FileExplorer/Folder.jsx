import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import Node from "./Node";

const Folder = ({ data, left }) => {
  const [showItems, setShowItems] = useState(false);
  console.log("data", left);
  return (
    <>
      <div
        onClick={() => setShowItems(!showItems)}
        style={{ paddingLeft: `${left}px`, cursor: "pointer" }}
      >
        {showItems ? <AiFillCaretDown /> : <AiFillCaretRight />}
        {data.name}
      </div>
      <div>
        {showItems &&
          data?.items?.map((item, idx) => {
            return item?.isFolder ? (
              <Folder data={item} key={idx} left={left + 15} />
            ) : (
              <Node key={idx} item={item} left={left} />
            );
          })}
      </div>
    </>
  );
};

export default Folder;
