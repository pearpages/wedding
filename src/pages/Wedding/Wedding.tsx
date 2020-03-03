import comoLlegar from "./images/como-llegar.jpeg";
import santMarc from "./images/sant-marc.jpeg";
import tallo from "./images/tallo.jpeg";

import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";
import { Page, MOD, HalfLeft, HalfRight } from "components";

export function Wedding() {
  const texts: Texts = useContext(TextContext);
  return (
    <Page title={texts.wedding.title} mod={MOD.MOD1}>
      <>
        <HalfLeft>
          <div className="image">
            <img src={tallo} alt="Santa Maria de Talló" />
          </div>
        </HalfLeft>
        <HalfRight>
          <>
            <p>La celebración será al mediodía del sábado 12.</p>
            <ul>
              <li>Iglesia</li>
              <li>Dirección</li>
              <li>Hora</li>
            </ul>
          </>
        </HalfRight>
        <HalfLeft>
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
        <HalfLeft />
        <HalfRight />
      </>
    </Page>
  );
}
