/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { renderHtml } from "helpers";

import "./Address.scss";

export interface AddressData {
  title: string;
  category?: string;
  htmlBody: string;
  link?: string;
  gmaps?: string;
}

export function Address({ data }: { data: AddressData }) {
  const { title, category, htmlBody, link, gmaps } = data;
  return (
    <div className="address">
      <h5 className="address__title">{title}</h5>
      {category ? <p className="address__category">{category}</p> : null}
      {gmaps ? (
        <p className="address__body">
          <a
            className="gmaps"
            {...renderHtml(htmlBody)}
            href={gmaps}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </p>
      ) : (
        <p className="address__body" {...renderHtml(htmlBody)}></p>
      )}
      {link ? (
        <a
          className="small-button"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          RESERVA
        </a>
      ) : null}
    </div>
  );
}
