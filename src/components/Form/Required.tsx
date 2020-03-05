import React from "react";

import { t } from "helpers";

export const Required = () => (
  <label className="error">{t("contact.required")}</label>
); // This field is required.
