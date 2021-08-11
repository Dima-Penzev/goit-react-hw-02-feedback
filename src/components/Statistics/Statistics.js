import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total !== 0 ? (
    <div>
      <p className={s.item}>Good: {good} </p>
      <p className={s.item}>Neutral: {neutral}</p>
      <p className={s.item}>Bad: {bad}</p>
      <p className={s.item}>Total: {total}</p>
      <p className={s.item}>
        Positive feedback: {total !== 0 ? positivePercentage : 0}%
      </p>
    </div>
  ) : (
    <Notification message="No feedback given" />
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
