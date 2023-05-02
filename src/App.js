import React from "react";
import { USER_POST } from "./API";

const App = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      userName: event.target[0].value,
      name: event.target[1].value,
      surname: event.target[2].value,
      email: event.target[3].value,
      phoneNumber: event.target[4].value,
      isActive: true,
      lockoutEnabled: true,
      roleNames: ["string"],
      password: event.target[5].value,
    });
    const fetchh = await fetch(url, options);

    console.log(fetchh);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: "block" }} htmlFor="username">
        Nome de Usuário
      </label>
      <input style={{ display: "block" }} type="text" name="username" />

      <label style={{ display: "block" }} htmlFor="appName">
        Nome
      </label>
      <input style={{ display: "block" }} type="text" name="appName" />

      <label style={{ display: "block" }} htmlFor="surName">
        Sobrenome
      </label>
      <input style={{ display: "block" }} type="text" name="surName" />

      <label style={{ display: "block" }} htmlFor="email">
        Email
      </label>
      <input style={{ display: "block" }} type="text" name="email" />

      <label style={{ display: "block" }} htmlFor="phoneNumber">
        Telefone
      </label>
      <input style={{ display: "block" }} type="text" name="phoneNumber" />

      <label style={{ display: "block" }} htmlFor="password">
        Senha
      </label>
      <input style={{ display: "block" }} type="password" name="password" />
      <button>Enviar</button>
    </form>
  );
};

export default App;
