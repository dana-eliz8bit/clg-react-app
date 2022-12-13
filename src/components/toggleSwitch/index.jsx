import classes from "./toggleSwitch.module.css";

const ToggleSwitch = ({ isOn, handleToggle }) => {
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
        <span className={classes.toggleSwitchButton}></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
