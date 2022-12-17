import React, { useState } from "react";
import ContactFormMsg from "./contactFormMsg";
import classes from "./contactForm.module.css";

const options = [
  "Design & Branding",
  "Web and App Development",
  "Cloud and API Consultancy",
  "Brand Strategy",
  "Just want to say Hi!",
  "Marketing and Ads",
];

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  function validateForm() {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    if (!email.match(emailRegex) || email.length < 3 || name.length < 1)
      setIsValid(false);
    else {
      setIsValid(true);
    }
  }
  return (
    <div className={classes["flex-group"]}>
      {/* <h2>Let's keep in touch!</h2> */}
      <form className={classes.form}>
        <div className={classes["flex-group"]}>
          <label>
            Name
            <input
              className={classes["form-control"]}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              className={classes["form-control"]}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <label>What would you like to chat about?</label>
        <select
          className={classes["form-control"]}
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option disabled={true} value="">
            --Choose an option--
          </option>
          {options.map((option, id) => (
            <option value={option} key={`${id}-${option}`}>
              {option}
            </option>
          ))}
        </select>
        <label>Message</label>
        <textarea
          className={classes["form-control"]}
          name="Message"
          cols="40"
          rows="5"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="button"
          className={classes.button}
          onClick={() => {
            validateForm();
            setIsSubmitted(true);
            console.log({ name, email, selectedService, message });
          }}
        >
          Submit
        </button>
        {isSubmitted && isValid && (
          <ContactFormMsg
            isError={false}
            content="Thanks for your details, we'll be in touch!"
          />
        )}
        {isSubmitted && !isValid && (
          <ContactFormMsg
            isError
            content="Please complete all form fields. Ensure a valid email address is provided."
          />
        )}
        {!isSubmitted && !isValid && (
          <ContactFormMsg isError content="Please complete all form fields." />
        )}
      </form>
    </div>
  );
}

export default ContactForm;
