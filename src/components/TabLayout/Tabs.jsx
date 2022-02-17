import { useState } from "react";
import "./Tabs.scss";

const Tabs = ({ items, children, onChange, activeClass = null }) => {
  const [selectTab, setSelectedTab] = useState(0);

  const onClickHandler = (id) => {
    onChange(id);
    setSelectedTab(id);
  };

  return (
    <>
      <div className="tabs-container">
        {items.map((element, idx) => {
          return (
            <div
              className={`tab-container ${
                idx === selectTab
                  ? activeClass
                    ? activeClass
                    : "active-tab"
                  : ""
              }`}
              onClick={() => onClickHandler(idx)}
            >
              {element.title}
            </div>
          );
        })}
      </div>
      {children}
    </>
  );
};

export default Tabs;
