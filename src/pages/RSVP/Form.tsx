import React, { useState } from "react";

import { Required } from "components";

export function Form() {
  const [hasPlusOne, setPlusOne] = useState(false);
  return (
    <div>
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
          />
          <Required />
        </div>
        <div className="form_row left13_last">
          <label>
            ACOMPAÑANTE<span>*</span>
          </label>
          <div className="select_container">
            <select
              required
              className="form_select"
              name="desert"
              onChange={e => {
                setPlusOne(e.target.value === "SI");
              }}
            >
              <option value="">--SELECCIONA--</option>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </div>
          <Required />
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
            />
            <Required />
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
            // disabled={isPosting}
          >
            {/* {isPosting ? (
              <img
                style={{ display: "inline-block" }}
                src="images/loader.gif"
                alt="Loading..."
                id="LoadingGraphic"
              />
            ) : ( */}
            CONFIRMO
            {/* )} */}
          </button>
        </div>
      </div>
    </div>
  );
}
