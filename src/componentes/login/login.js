import React from "react";

import "./login.css";
import {useNavigate } from "react-router-dom";



export default function Login() {

  const navigate = useNavigate();

  function CriarConta() {
    navigate("/SignUp");
  }

  function Logar() {
    navigate("/Home");
  }

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  
  return (
    <div className="Login">
      <form>
        <label className="label">
            E-mail:

            <input type="email" name="name" placeholder="E-mail" />
        </label>
        <label className="label">
          Senha:
          
            <input type="password" name="senha" placeholder="Senha"/>
        </label>
          <input type="submit" value="Submit" className="button" onClick={Logar}/>
          <a onClick={CriarConta}> Criar Conta </a>
        </form>
    </div>

  );

}