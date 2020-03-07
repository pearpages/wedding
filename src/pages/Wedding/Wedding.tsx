import React from "react";

import "./Wedding.scss";
import comoLlegar from "./images/como-llegar.jpeg";
import santMarc from "./images/sant-marc.jpeg";
import tallo from "./images/tallo.jpeg";
import { Page, MOD, HalfLeft, HalfRight } from "components";
import { t, renderHtml, getImage } from "helpers";

const Row = ({ children }: { children: JSX.Element }) => (
  <div className="row">{children}</div>
);

export function Wedding() {
  return (
    <Page title={t("wedding.title")} mod={MOD.MOD1}>
      <>
        <Row>
          <>
            <HalfLeft>
              <div className="image" {...getImage(tallo)}></div>
            </HalfLeft>
            <HalfRight title={t("global.ceremony")}>
              <>
                <p>La celebración será al mediodía del sábado 12.</p>
                <p
                  className="address"
                  {...renderHtml(t("santaMaria.location"))}
                ></p>
              </>
            </HalfRight>
          </>
        </Row>
        <Row>
          <>
            <HalfLeft title={t("global.reception")}>
              <>
                <p>
                  Tras la ceremonia, nos trasladaremos a un precioso Hotel en el
                  centro del valle en donde seguir la fiesta.
                </p>
                <p
                  className="address"
                  {...renderHtml(t("santMarc.location"))}
                ></p>
              </>
            </HalfLeft>
            <HalfRight>
              <div className="image" {...getImage(santMarc)}></div>
            </HalfRight>
          </>
        </Row>
        <Row>
          <>
            <HalfLeft>
              <div className="image" {...getImage(comoLlegar)}></div>
            </HalfLeft>
            <HalfRight title={t("global.howtoGetThere")}>
              {/* Explicació deom arribar */}
            </HalfRight>
          </>
        </Row>
      </>
    </Page>
  );
}
