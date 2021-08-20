import PropTypes from "prop-types";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <StatisticsItem label="Good" value={good} />
      <StatisticsItem label="Neutral" value={neutral} />
      <StatisticsItem label="Bad" value={bad} />
      <StatisticsItem label="Total" value={total} />
      <StatisticsItem
        label="Positive feedback"
        value={`${positivePercentage}%`}
      />
    </ul>
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
