import React, { useState } from "react";

import { Required, ServerError } from "components";
import { t, reduceFormValues, post } from "helpers";
import { RSVP } from "types";

const Success = () => (
  <h3 className="form_toptitle success" id="Note">
    {t("contact.messageSent")}
  </h3>
);

export function Form() {
  const [isSent, setIsSent] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [hasPlusOne, setPlusOne] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidSelector, setIsValidSelector] = useState(true);
  const [isValidPlusOne, setIsValidPlusOne] = useState(true);
  const [isServerError, setIsServerError] = useState(false);
  return (
    <>
      {isSent ? (
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
              setIsValidSelector(formValues.partner.valid);
              if (hasPlusOne) {
                setIsValidPlusOne(formValues.partnerName.valid);
              }
              if (form.checkValidity()) {
                setIsPosting(true);
                const rsvp: RSVP = {
                  name: formValues.name.value,
                  partner: formValues.partner.value
                };
                if (formValues.partnerName.value) {
                  rsvp.partnerName = formValues.partnerName.value;
                }
                if (formValues.food.value) {
                  rsvp.food = formValues.food.value;
                }
                if (formValues.comments.value) {
                  rsvp.comments = formValues.comments.value;
                }

                post("/rsvp", JSON.stringify(rsvp))
                  .then(response => {
                    if (String(response.status).startsWith("4")) {
                      setIsServerError(true);
                      setIsPosting(false);
                      console.error(response);
                    } else {
                      setIsSent(true);
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
            <div className="form_section">
              <div className="form_row left12_first">
                <label>
                  NOMBRE Y APELLIDOS<span>*</span>
                </label>
                <input
                  style={{ height: "48px" }}
                  type="text"
                  className="form_input required"
                  name="name"
                  id="name"
                  required
                  onChange={e => setIsValidName(e.target.checkValidity())}
                />
                {isValidName ? null : <Required />}
              </div>
              <div className="form_row left13_last">
                <label>
                  ACOMPAÑANTE<span>*</span>
                </label>
                <div className="select_container">
                  <select
                    required
                    className="form_select"
                    name="partner"
                    id="partner"
                    onChange={e => {
                      setPlusOne(e.target.value === "SI");
                      setIsValidSelector(e.target.checkValidity());
                    }}
                  >
                    <option value="">--SELECCIONA--</option>
                    <option value="NO">NO</option>
                    <option value="SI">SI</option>
                  </select>
                </div>
                {isValidSelector ? null : <Required />}
              </div>
              {hasPlusOne ? (
                <div className="form_row left12_first">
                  <label>
                    NOMBRE Y APELLIDOS DEL ACOMPAÑANTE<span>*</span>
                  </label>
                  <input
                    style={{ height: "48px" }}
                    type="text"
                    className="form_input required"
                    name="partnerName"
                    id="partnerName"
                    required={hasPlusOne}
                    onChange={e => setIsValidPlusOne(e.target.checkValidity())}
                  />
                  {isValidPlusOne ? null : <Required />}
                </div>
              ) : null}

              <div className="form_row_full">
                <label>REQUERIMIENTOS ALIMENTARIOS</label>
                <textarea
                  className="form_textarea_full"
                  name="food"
                  id="food"
                  style={{ height: "90px" }}
                ></textarea>
              </div>
              <div className="form_row_full">
                <label>OTROS COMENTARIOS</label>
                <textarea
                  className="form_textarea_full"
                  name="comments"
                  id="comments"
                  style={{ height: "90px" }}
                ></textarea>
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
                    "CONFIRMO"
                  )}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
