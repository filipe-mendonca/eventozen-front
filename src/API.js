//export const API_URL = "http://localhost:3000/api/";
export const API_URL = "https://zenstage.vercel.app/";

export function USER_GET() {
  return {
    url: API_URL + "enrollment",
    options: {
      method: "GET",
      headers: {
        "X-API-Key": "a870d820-47a8-4395-afe1-6ad7f98ad47a",
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
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

export function LOGIN(body) {
  return {
    url: API_URL + "/api/Authentication/Login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
