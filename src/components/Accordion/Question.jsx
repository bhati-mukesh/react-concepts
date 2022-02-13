import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Question = ({ data, isOpen, showHandler }) => {
  console.log({ isOpen });
  return (
    <>
      <div
        className="question"
        onClick={() => showHandler(data.id)}
        tabIndex="0"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            showHandler(data.id);
          }
        }}
      >
        {data.question}
        <span className="accordion-icons">
          {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </span>
      </div>
      {isOpen && <div className="answer">{data.answer}</div>}
    </>
  );
};

export default Question;
