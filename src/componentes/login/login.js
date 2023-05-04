import React, { Button ,useState, Form } from "react";

import "./login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login">
      <form>
        <label className="label">
            E-mail:

            <input type="email" name="name" />
        </label>
        <label className="label">
          Senha:
          
            <input type="password" name="senha"/>
        </label>
        <input type="submit" value="Submit" className="button" />
        </form>
    </div>

  );

}