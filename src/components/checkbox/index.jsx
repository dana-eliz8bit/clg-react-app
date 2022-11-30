import classes from "./checkbox.module.css"

// Step 21 - Create new UI component
const Checkbox = ({ label, value, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        className={classes.input}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;