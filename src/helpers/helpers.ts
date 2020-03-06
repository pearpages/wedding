import { Texts } from "types";
import translationTexts from "translations.json";
const translations: Texts = translationTexts;

const isAlreadyAppended: (path: string) => boolean = path =>
  !!Array.from(document.querySelectorAll("script")).find(
    script => script.getAttribute("src") === path
  );

export function appendScriptInTheDOM(
  path: string,
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null = null
) {
  if (!isAlreadyAppended(path)) {
    const script = document.createElement("script");
    script.src = path;
    if (onload) {
      script.onload = onload;
    }

    document.body.appendChild(script);
  }
}

export function renderHtml(html: string) {
  return { dangerouslySetInnerHTML: { __html: html } };
}

const complexString = /{\w*\.\w*}/g;

export function hasComplexString(string: string): boolean {
  return string.search(complexString) !== -1;
}

export function t(key: string, alternateTexts?: Texts): string {
  if (key.search(/\w*\.\w*/) === -1) {
    return "{" + key + "}";
  }
  const texts = alternateTexts || translations;
  const keys = key.split(".");
  try {
    const first = keys.shift()!;
    let finalString = keys.reduce(
      (previous, current) => previous[current],
      texts[first]
    );

    let notDone = hasComplexString(finalString);
    while (notDone) {
      finalString = finalString.replace(complexString, (key: string) =>
        t(key.replace(/{|}/g, ""), alternateTexts)
      );
      notDone = hasComplexString(finalString);
    }
    return finalString;
  } catch (_) {}
  return key;
}

export const getSymbol = (value: number, symbol: string): string => {
  const array: any[] = [];
  array.length = value;
  array.fill(symbol);
  return array.join("");
};

export const getImage = (imagePath: string) => ({
  style: {
    background: "url(" + imagePath + ")",
    backgroundSize: "cover"
  }
});
