import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import "./Select.scss";

export default function Select({
  options,
  onSelect,
  getOptionLabel,
  placeHolder,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const optionRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", closeOptions);
    return () => document.removeEventListener("click", closeOptions);
  }, []);

  const closeOptions = (e) => {
    if (optionRef.current && e.target !== optionRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <div className="dropdown">
      <div
        ref={optionRef}
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected : placeHolder}
        <span className="select-btn-icon">
          {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-option-container">
          {options.map((option, idx) => {
            const label = getOptionLabel(option);
            return (
              <div
                key={idx}
                className="dropdown-option"
                title={label}
                onClick={(e) => {
                  onSelect(option);
                  setSelected(label);
                }}
              >
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
