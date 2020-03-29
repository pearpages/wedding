import React, { useRef } from "react";

import "./Presents.scss";
import { t } from "helpers";
import { Page, MOD } from "components";

const IBAN = process.env.REACT_APP_IBAN || "ES2100000000000000000000";

export function Presents() {
  const ibanTextarea = useRef(document.createElement("textarea"));
  const handleClick = () => {
    ibanTextarea.current.select();
    document.execCommand("copy");
  };
  return (
    <Page title={t("presents.title")} mod={MOD.MOD3}>
      <>
        <p>{t("presents.body")}</p>
        <div className="iban">
          <span className="iban__code">{IBAN}</span>{" "}
          <button onClick={handleClick} className="iban__button small-button">
            Copiar
          </button>
        </div>
        <textarea
          readOnly
          ref={ibanTextarea}
          style={{ position: "absolute", left: "-10000px" }}
          name="iban"
          id=""
          value={IBAN}
        ></textarea>
      </>
    </Page>
  );
}
