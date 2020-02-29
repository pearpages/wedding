import React from "react";

const TextContext = React.createContext({});

export const TextProvider = TextContext.Provider;
export const TextConsumer = TextContext.Consumer;
export default TextContext;
