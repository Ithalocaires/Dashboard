  import Sidebar from "../../sidebar/sidebar";
  import "../register/register.css"
  import { TfiPlus, TfiTrash } from "react-icons/tfi";
  import React, { useState } from 'react';
  import Modal from "react-modal"
  

  
  Modal.setAppElement('#root');
    
  function Register() {

   
    const [sensorName, setSensorName] = useState();
    const [sensorStatus, setSensorStatus] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(){
      setModalIsOpen(true);
    }

    function closeModal(){
      setModalIsOpen(false);
    }

    const sensors = [
      {id: 1, name: 'Sensor 1', status: true},
      {id: 2, name: 'Sensor 2', status: true},
      {id: 3, name: 'Sensor 3', status: true},
      {id: 4, name: 'Sensor 4', status: false},
      {id: 5, name: 'Sensor 5', status: false},
      {id: 6, name: 'Sensor 6', status: false},
    ];

    const listItems = sensors.map(({sensors, index, name, status}) =>
    <li key={index} className="list"> {name} 
      <h7 className="statusText">status: 
        {status?
        <h7 className="statusON"> ON </h7>
        :
        <h7 className="statusOFF"> OFF </h7>
        }
      </h7>
      <a className="deleteSensor">   
      <TfiTrash size={20} className="deleteIcon"></TfiTrash>
      </a> 
    </li>
  );

    return (
      <div>
        <Sidebar/>
          <div id="root" className="register">             
              <h1 className="registerTitle">
                Registrar Sensores
                <a onClick={openModal} className="openModal">
                <TfiPlus color="white" size={25} className="addIcon" onClick={openModal}  ></TfiPlus>
                </a>

                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Cadastro de Sensores"
                overlayClassName='modal-overlay'
                className='modal-content'
                >
               <label className="label">
                  Nome do sensor:
                  <input type="email" name="name" placeholder="Nome do sensor" />
                  <button className="confirm" onClick={closeModal}> Confirmar </button>
               </label>

                </Modal>
              </h1>
              <div className="registerContent">
                <ul className="ul">{listItems}</ul>
              </div>  
          </div>
      </div>
    );
  }
  
  export default Register;