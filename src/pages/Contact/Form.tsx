import React, { useState } from "react";

import { reduceFormValues, checkAllFieldsValid } from "./helpers";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form
      noValidate
      onSubmit={e => {
        e.preventDefault();
        const form: any = e.target;
        const formValues = reduceFormValues(form.elements, {
          contactname: {
            fieldName: "contactname",
            requiredTxt: "",
            formatErrorTxt: ""
          },
          contactemail: {
            fieldName: "contactemail",
            requiredTxt: "",
            formatErrorTxt: ""
          },
          contactphone: {
            fieldName: "contactphone",
            requiredTxt: "",
            formatErrorTxt: ""
          },
          contactcomments: {
            fieldName: "contactcomments",
            requiredTxt: "",
            formatErrorTxt: ""
          },
          submit: { fieldName: "submit", requiredTxt: "", formatErrorTxt: "" }
        });
        const allFieldsValid = checkAllFieldsValid(formValues); // form.checkValidity();
        console.log(formValues, allFieldsValid, form.checkValidity());
      }}
    >
      <div className="form_row left13_first">
        <label>NAME</label>
        <input
          type="text"
          value={name}
          className="form_input required valid"
          name="contactname"
          id="contactname"
          required
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form_row left13">
        <label>EMAIL</label>
        <input
          type="email"
          value={email}
          className="form_input required email error"
          name="contactemail"
          placeholder="tu@email.com"
          required
          id="contactemail"
          onChange={e => {
            console.log(e);
            setEmail(e.target.value);
          }}
        />
        <label className="error">Please enter a valid email address.</label>
      </div>
      <div className="form_row left13_last">
        <label>PHONE</label>
        <input
          type="number"
          value={phone}
          className="form_input required valid"
          name="contactphone"
          id="contactphone"
          onChange={e => {
            console.log(e);
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="form_row_full">
        <label>MESSAGE</label>
        <textarea
          value={message}
          required
          className="form_textarea_full valid"
          name="contactcomments"
          id="contactcomments"
          onChange={e => {
            console.log(e);
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="form_row">
        <button type="submit" className="form_submit_contact" id="submit">
          SEND MESSAGE
        </button>
        <label id="loader">
          <img src="images/loader.gif" alt="Loading..." id="LoadingGraphic" />
        </label>
      </div>
    </form>
  );
}
