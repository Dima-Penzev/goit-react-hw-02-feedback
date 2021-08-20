import PropTypes from "prop-types";
import s from "./StatisticsItem.module.css";

function StatisticsItem({ label, value }) {
  return (
    <li className={s.item}>
      {label}: {value}
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default StatisticsItem;
