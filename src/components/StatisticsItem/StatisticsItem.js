import PropTypes from "prop-types";
import s from "./StatisticsItem.module.css";

function StatisticsItem({ name, value }) {
  return (
    <p className={s.item}>
      {name}: {name !== "Positive feedback" ? value : `${value}%`}
    </p>
  );
}

StatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticsItem;
