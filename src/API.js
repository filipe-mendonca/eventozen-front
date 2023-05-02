export const API_URL = "https://eventozen-api.azurewebsites.net";

export function USER_POST(body) {
  return {
    url: API_URL + "/api/identity/users",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function EVENT_POST(body) {
  return {
    url: API_URL + "/api/app/evento",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
