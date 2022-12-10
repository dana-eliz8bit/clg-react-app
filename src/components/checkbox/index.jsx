import classes from "./checkbox.module.css";

// Step 21 - Create new UI component
const Checkbox = ({ label, value, checked, onChange }) => {
  return (
    <label className={classes.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {checked ? (
        <p className={classes.checkboxLabelText}>
          <strike>{label}</strike>
        </p>
      ) : (
        <p className={classes.checkboxLabelText}>{label}</p>
      )}
    </label>
  );
};

export default Checkbox;
