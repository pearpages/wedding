import React from "react";

import "./Wedding.scss";
import comoLlegar from "./images/como-llegar.jpeg";
import santMarc from "./images/sant-marc.jpeg";
import tallo from "./images/tallo.jpeg";
import { Page, MOD, HalfLeft, HalfRight, Address } from "components";
import { t, getImage, renderHtml } from "helpers";

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
                <p>{t("wedding.ceremony")}</p>
                <Address
                  data={{
                    title: t("santaMaria.location.name"),
                    htmlBody: t("santaMaria.location.address")
                  }}
                />
              </>
            </HalfRight>
          </>
        </Row>
        <Row>
          <>
            <HalfLeft title={t("global.reception")}>
              <>
                <p>{t("wedding.reception")}</p>
                <Address
                  data={{
                    title: t("santMarc.location.name"),
                    htmlBody: t("santMarc.location.address")
                  }}
                />
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
              <div {...renderHtml(t("wedding.howToArrive"))}></div>
            </HalfRight>
          </>
        </Row>
      </>
    </Page>
  );
}
