const Button = (props) => {
  return (
    <div>
      <button style={{ backgroundColor: props.isActive ? "green" : "red" }}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;