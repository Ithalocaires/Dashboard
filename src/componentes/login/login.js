import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Obtém as informações do localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Verifica se as informações inseridas correspondem às armazenadas
    if (email === storedEmail && password === storedPassword) {
      // Autenticação bem-sucedida, redireciona para a página inicial
      navigate("/home");
    } else {
      // Autenticação falhou, exibe mensagem de erro
      toast.error("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  function handleSignUp() {
    navigate("/signUp");
  }

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <label className="label">
          E-mail:
          <input
            type="email"
            name="name"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="label">
          Senha:
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="button" />
        <a onClick={handleSignUp}>Criar Conta</a>
      </form>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default Login;