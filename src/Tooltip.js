import styles from "./Tooltip.module.css";

function Tooltip({ position }) {
  return (
    <div className={`${styles.tooltip} ${styles[position]}`}>
      Thanks for hovering! I'm a tooltip
    </div>
  );
}

export default Tooltip;
