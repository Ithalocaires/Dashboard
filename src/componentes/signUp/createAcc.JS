import React from "react";
import "./createAcc.css";
import { useNavigate } from "react-router-dom";

function CreateAcc() {

  const navigate = useNavigate();

  function Criar() {
    navigate("/Login");
  }

  return (
    <div className="signUp">
      <form>
      <label className="label">
            Nome:
            <input type="text" name="name" placeholder="Nome" />
        </label>
        <label className="label">
            E-mail:
            <input type="email" name="name" placeholder="E-mail" />
        </label>
      <label className="label">
            Senha:
            <input type="password" name="name" placeholder="Senha" />
        </label>
        <input type="submit" value="Submit" className="button" onClick={Criar}/>
      </form>
    </div>
  );
}

export default CreateAcc;