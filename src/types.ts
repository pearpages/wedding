export type Texts = { [key: string]: any };
export interface Route {
  path: string;
  label: string;
  children?: Route[];
}
