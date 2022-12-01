import classes from "./contactFormMsg.module.css";

function ContactFormMsg(props) {
  const { isError, content } = props;
  console.log(isError);
  return (
    <div className={isError === true ? classes.error : classes.success}>
      {content}
    </div>
  );
}
export default ContactFormMsg;
