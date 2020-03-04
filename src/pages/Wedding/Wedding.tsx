import comoLlegar from "./images/como-llegar.jpeg";
import santMarc from "./images/sant-marc.jpeg";
import tallo from "./images/tallo.jpeg";

import React from "react";

import { Page, MOD, HalfLeft, HalfRight } from "components";
import { t } from "helpers";

export function Wedding() {
  return (
    <Page title={t("wedding.title")} mod={MOD.MOD1}>
      <>
        <HalfLeft>
          <div className="image">
            <img src={tallo} alt="Santa Maria de Talló" />
          </div>
        </HalfLeft>
        <HalfRight title={t("global.ceremony")}>
          <>
            <p>La celebración será al mediodía del sábado 12.</p>
            <ul>
              <li>Iglesia</li>
              <li>Dirección</li>
              <li>Hora</li>
            </ul>
          </>
        </HalfRight>
        <HalfLeft title={t("global.reception")}>
          <>
            <p>
              Tras la ceremonia, nos trasladaremos a un precioso Hotel en el
              centro del valle en donde seguir la fiesta.
            </p>
            <ul>
              <li>Mas Sant Marc:</li>
              <li>Dirección:</li>
              <li>Hora:</li>
            </ul>
          </>
        </HalfLeft>
        <HalfRight>
          <div className="image">
            <img src={santMarc} alt="Sant Marc" />
          </div>
        </HalfRight>
        <HalfLeft>
          <div className="image">
            <img src={comoLlegar} alt="Como llegar" />
          </div>
        </HalfLeft>
        <HalfRight title={t("global.howtoGetThere")}>
          <p>Explicación de como llegar...</p>
        </HalfRight>
      </>
    </Page>
  );
}
