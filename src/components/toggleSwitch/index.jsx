import classes from "./toggleSwitch.module.css";

const ToggleSwitch = ({
  isOn,
  handleToggle,
  leftAriaLabel,
  leftEmoji,
  rightAriaLabel,
  rightEmoji,
}) => {
  return (
    <>
      <input
        className={classes.toggleSwitchCheckbox}
        checked={isOn}
        onChange={handleToggle}
        id={`toggle-switch`}
        type="checkbox"
      />
      <label className={classes.toggleSwitchLabel} htmlFor="toggle-switch">
        {isOn && (
          <span role="img" aria-label={leftAriaLabel} className={classes.left}>
            {leftEmoji}
          </span>
        )}
        <span className={classes.toggleSwitchButton}></span>
        {!isOn && (
          <span
            role="img"
            aria-label={rightAriaLabel}
            className={classes.right}
          >
            {rightEmoji}
          </span>
        )}
      </label>
    </>
  );
};

export default ToggleSwitch;
