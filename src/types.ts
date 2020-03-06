export type Texts = { [key: string]: any };
export interface Route {
  path: string;
  label: string;
  isAnchor?: boolean;
  children?: Route[];
}

export interface Contact {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface RSVP {
  name: string;
  partner: string;
  partnerName?: string;
  food?: string;
  comments?: string;
}
