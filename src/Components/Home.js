import React from "react";
import { USER_GET } from "../API";

async function fetchUser() {
  const { url, options } = USER_GET();
  const response = await fetch(url, options);
  const json = (await response).json();
  console.log(json);
}

fetchUser();

const Home = () => {
  return <button onClick={fetchUser}>Testar Fetch</button>;
};

export default Home;
