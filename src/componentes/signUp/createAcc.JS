import React, { useState } from 'react';
import "../signUp/createAcc.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAcc() {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    navigate("/");
  };


  const handleCreateAccount = () => {

    // Verifica se os campos estão vazios
    if (userName.trim() === "" || email.trim() === "" || password.trim() === "") {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }
    
    // Verifica a length do campo newPassword
    if (userName.length < 3) {
      toast.error("Insira um Nome válido");
      return;
    }
    
    //Verifica se os campos newPassword e confirmNewPassword são diferentes
    if (email.length < 5) {
      toast.error("Insira um email válido");
      return;
    }

    if (password.length < 8) {
      toast.error("A senha deve ter mais que 8 caracteres");
      return;
    }
  
    // Fecha o modal e retorna para a tela do usuário
    toast.success("Conta criada com sucesso");
    setIsOpen(true);
  };



  return (
    <div className="signUp">
        {isOpen && (
            <dialog open>
              <h2>Conta criada com sucesso</h2>
              <button onClick={closeDialog}>Fechar</button>
            </dialog>
          )}
          <div>
            <label className="label">  *Nome:</label>
            <input 
            type="text" 
            name="nome" 
            placeholder="Nome" 
            value={userName}
            id='userName'
            onChange={(e) => setUserName(e.target.value)}
              />
          </div>
          <div>
            <label className="label">  *E-mail:</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={email} 
            id='email'
            onChange={(e) => setEmail(e.target.value)}
             />
          </div>

          <div>
            <label className="label">  *Senha:</label>
            <input
            type="password" 
            name="password" 
            placeholder="Senha" 
            value={password} 
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="button" onClick={handleCreateAccount}>Submit</button>
        
          <ToastContainer autoClose={3000} />
    </div>
  );
}

export default CreateAcc;