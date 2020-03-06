import React, { useState } from "react";

import { t, post, reduceFormValues } from "helpers";
import { Required, Success, ServerError } from "components";
import { Contact } from "types";

export function Form() {
  const [isSuccess, setSuccess] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setisValidMessage] = useState(true);
  const [isServerError, setIsServerError] = useState(false);
  return (
    <>
      {isSuccess ? (
        <Success />
      ) : (
        <>
          {isServerError ? <ServerError /> : null}
          <p>
            <span>*</span>
            {t("contact.required")}
          </p>
          <form
            noValidate
            onSubmit={e => {
              e.preventDefault();
              const form: any = e.target;
              const formValues = reduceFormValues(form.elements);
              setIsValidName(formValues.name.valid);
              setIsValidEmail(formValues.email.valid);
              setisValidMessage(formValues.message.valid);
              const allFieldsValid = form.checkValidity();
              if (allFieldsValid) {
                setIsPosting(true);
                const contact: Contact = {
                  name: formValues.name.value,
                  email: formValues.email.value,
                  message: formValues.message.value
                };
                if (formValues.phone.value) {
                  contact.phone = formValues.phone.value;
                }
                post("/contact", JSON.stringify(contact))
                  .then(response => {
                    if (String(response.status).startsWith("4")) {
                      setIsServerError(true);
                      setIsPosting(false);
                      console.error(response);
                    } else {
                      setSuccess(true);
                    }
                  })
                  .catch(e => {
                    setIsServerError(true);
                    console.error(e);
                    setIsPosting(false);
                  });
              }
            }}
          >
            <div className="form_row left13_first">
              <label>
                {t("contact.name")}
                <span>*</span>
              </label>
              <input
                type="text"
                className="form_input required valid"
                name="name"
                id="name"
                required
                onChange={e => setIsValidName(e.target.checkValidity())}
              />
              {isValidName ? null : <Required />}
            </div>
            <div className="form_row left13">
              <label>
                {t("contact.email")}
                <span>*</span>
              </label>
              <input
                type="email"
                className="form_input required email Required"
                name="email"
                placeholder="tu@email.com"
                required
                id="email"
                onChange={e => setIsValidEmail(e.target.checkValidity())}
              />
              {isValidEmail ? null : <Required />}
              {/* <label className="Required">Please enter a valid email address.</label> */}
            </div>
            <div className="form_row left13_last">
              <label>{t("contact.phone")}</label>
              <input
                type="number"
                className="form_input required valid"
                name="phone"
                id="phone"
              />
            </div>
            <div className="form_row_full">
              <label>
                {t("contact.message")}
                <span>*</span>
              </label>
              <textarea
                required
                className="form_textarea_full valid"
                name="message"
                id="message"
                onChange={e => setisValidMessage(e.target.checkValidity())}
              ></textarea>
              {isValidMessage ? null : <Required />}
            </div>
            <div className="form_row">
              <button
                style={{
                  width: "308px",
                  height: "54px",
                  border: "1px solid",
                  textAlign: "center"
                }}
                type="submit"
                className="form_submit_contact"
                id="submit"
                disabled={isPosting}
              >
                {isPosting ? (
                  <img
                    style={{ display: "inline-block" }}
                    src="images/loader.gif"
                    alt="Loading..."
                    id="LoadingGraphic"
                  />
                ) : (
                  t("contact.sendMessage")
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
