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
