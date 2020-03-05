import React, { useState } from "react";

import { Required } from "components";
import { t, reduceFormValues } from "helpers";

const Success = () => (
  <h3 className="form_toptitle success" id="Note">
    {t("contact.messageSent")}
  </h3>
);

export function Form() {
  const [hasPlusOne, setPlusOne] = useState(false);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidSelector, setIsValidSelector] = useState(true);
  const [isValidPlusOne, setIsValidPlusOne] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  return (
    <>
      {isSent ? (
        <Success />
      ) : (
        <form
          noValidate
          onSubmit={e => {
            e.preventDefault();
            const form: any = e.target;
            const formValues = reduceFormValues(form.elements);
            setIsValidName(formValues.rsvpname.valid);
            setIsValidSelector(formValues.partner.valid);
            if (hasPlusOne) {
              setIsValidPlusOne(formValues.plusone.valid);
            }
            if (form.checkValidity()) {
              setIsPosting(true);
              setTimeout(() => setIsSent(true), 500);
            }
            console.log(formValues);
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
                name="rsvpname"
                id="rsvpname"
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
                  name="plusone"
                  id="plusone"
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
                name="menunotes"
                style={{ height: "90px" }}
              ></textarea>
            </div>
            <div className="form_row_full">
              <label>OTROS COMENTARIOS</label>
              <textarea
                className="form_textarea_full"
                name="rsvpcomments"
                id="rsvpcomments"
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
      )}
    </>
  );
}
