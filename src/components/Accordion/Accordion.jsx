import Question from "./Question";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(null);

  const showHandler = (id) => {
    if (showAnswer === id) {
      setShowAnswer(null);
    } else {
      setShowAnswer(id);
    }
  };

  return (
    <div className="question-answer-container">
      {data.map((question) => {
        return (
          <Question
            key={question.id}
            isOpen={showAnswer === question.id}
            showHandler={showHandler}
            data={question}
          />
        );
      })}
    </div>
  );
};

Accordion.prototype = {
  data: PropTypes.array,
};

export default Accordion;
