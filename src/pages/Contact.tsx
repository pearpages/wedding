import React from "react";

import { t } from "helpers";
import { Page } from "components";

export function Contact() {
  const email = t("global.email");
  const subContent = (
    <>
      <p>{t("contact.subTitle")}</p>
      <div className="contact_email">
        <a href={"mailto:" + email}>{email}</a>
      </div>
    </>
  );
  return <Page title={t("contact.title")} subContent={subContent}></Page>;
}
