export function appendScriptInTheDOM(
  path: string,
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null = null
) {
  const script = document.createElement("script");
  script.src = path;
  if (onload) {
    script.onload = onload;
  }

  document.body.appendChild(script);
}
