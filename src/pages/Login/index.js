import React from "react";

import { FaEnvelope, FaLock } from "react-icons/fa";

import { Form } from "./styles";

export default function Login() {
  return (
    <Form>
      <label>
        <span>
          <FaEnvelope /> E-mail:
        </span>
        <input type="email" name="email" id="email" />
      </label>

      <label>
        <span>
          <FaLock /> Senha:
        </span>
        <input type="password" name="password" id="password" />
      </label>

      <button type="submit">Entrar</button>
    </Form>
  );
}
