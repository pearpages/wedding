import React, { useState } from "react";

import { t } from "helpers";
import { reduceFormValues } from "./helpers";
import { Required } from "components";

const Success = () => (
  <h3 className="form_toptitle success" id="Note">
    {t("contact.messageSent")}
  </h3>
);

export function Form() {
  const [isSuccess, setSuccess] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setisValidMessage] = useState(true);
  return (
    <>
      {isSuccess ? (
        <Success />
      ) : (
        <>
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
              setIsValidName(formValues.contactname.valid);
              setIsValidEmail(formValues.contactemail.valid);
              setisValidMessage(formValues.contactcomments.valid);
              const allFieldsValid = form.checkValidity();
              if (allFieldsValid) {
                setIsPosting(true);
                setTimeout(() => setSuccess(true), 500);
              }
              console.log(formValues, allFieldsValid);
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
                name="contactname"
                id="contactname"
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
                name="contactemail"
                placeholder="tu@email.com"
                required
                id="contactemail"
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
                name="contactphone"
                id="contactphone"
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
                name="contactcomments"
                id="contactcomments"
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
