import React from "react";

import { t } from "helpers";
import { Page, Full, MOD } from "components";
import { Form } from "./Form";

export function RSVP() {
  return (
    <Page
      title={t("rsvp.title")}
      mod={MOD.MOD2}
      subContent={<p>Nos encantaría que asistieras</p>}
    >
      <Full>
        <>
          <h3 className="form_subtitle">CONFIRMA TU ASISTENCIA</h3>
          <Form />
        </>
      </Full>
    </Page>
  );
}
