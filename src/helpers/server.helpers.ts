const API = process.env.API || "http://localhost:9000";

export const post = async (path: string, body: string) => {
  return fetch(API + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body
  });
};
