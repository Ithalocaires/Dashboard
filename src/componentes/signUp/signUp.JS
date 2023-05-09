import React from "react";

import "./signUp.css";

export default function CreateAcc() {

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
          
            <input type="password" name="senha" placeholder="Senha"/>
        </label>
        <input type="submit" value="Submit" className="button" />
        </form>
    </div>

  );

}