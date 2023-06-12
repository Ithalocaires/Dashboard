import React, { useState } from 'react';
import { 
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import Sidebar from "../../sidebar/sidebar";
import "../user/user.css"
import avatar from '/Facul/Projeto2/projetoin/src/assets/avatar.png'
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)





function User() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  const handleChangePassword = (event) => {

    event.preventDefault();

    // Verifica se os campos estão vazios
    if (password.trim() === "" || newPassword.trim() === "" || confirmNewPassword.trim() === "") {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }
    
    // Verifica a length do campo newPassword
    if (newPassword.length < 6) {
      toast.error("A nova senha deve ter pelo menos 6 caracteres!");
      return;
    }
    
    //Verifica se os campos newPassword e confirmNewPassword são diferentes
    if (newPassword !== confirmNewPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }
  
    // Fecha o modal e retorna para a tela do usuário
    toast.success("Senha alterada!");
    closeModal();
  };

  
  return (
    <div>
      <Sidebar/>
      <div className="userImg">
      <img className="userAvatar" src={avatar} />
      </div>
        <div className="user">
            <h1 className="userTitle">Bem-vindo, Carlos!</h1>
            <div className="userContent">
                <p className="userInfo">Nome:   Carlos Vieira da Silva</p>
                <p className="userInfo2">Email:   CarlosV.Silva@gmail.com</p>
            </div>
        </div>
        <button onClick={openModal} className="changePasswordBtn">
        Alterar senha
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Alterar Senha"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2 className='modalText'>Alterar Senha</h2>
        <form className="passwordForm">
          <label htmlFor="password" className='modalLabel'>Senha atual:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="newPassword" className='modalLabel'>Nova senha:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label htmlFor="confirmNewPassword" className='modalLabel'>Confirmar nova senha:</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button type="submit" onClick={handleChangePassword} className='confirmButton'>
            Confirmar
          </button>
        </form>
      </Modal>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default User;