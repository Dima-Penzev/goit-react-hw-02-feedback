import PropTypes from "prop-types";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import s from "./Statistics.module.css";

function Statistics({ options }) {
  return (
    <ul className={s.list}>
      {options.map((elem) => (
        <li key={elem.name}>
          <StatisticsItem name={elem.name} value={elem.value} />
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
