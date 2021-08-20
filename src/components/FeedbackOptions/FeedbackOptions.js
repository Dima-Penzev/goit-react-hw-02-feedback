import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.options}>
      {options.map((elem) => (
        <button
          className={s.button}
          type="button"
          key={elem}
          onClick={() => onLeaveFeedback(elem.toLowerCase())}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
