  import Sidebar from "../../sidebar/sidebar";
  import "../register/register.css"
  import { TfiPlus, TfiTrash } from "react-icons/tfi";
  import React, { useState } from 'react';
  import Modal from "react-modal"
  import Switch from "react-switch";
  
  Modal.setAppElement('#root');
    
  function Register() {


    const[sensors, setSensors] = useState([
      {id: 1, name: 'Sensor 1', status: true},
      {id: 2, name: 'Sensor 2', status: true},
      {id: 3, name: 'Sensor 3', status: true},
      {id: 4, name: 'Sensor 4', status: false},
      {id: 5, name: 'Sensor 5', status: false},
      {id: 6, name: 'Sensor 6', status: false},
    ]);
   
    const [sensorName, setSensorName] = useState();
    const [sensorStatus, setSensorStatus] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [checked, setChecked] = useState(false);

    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };

    function openModal(){
      setModalIsOpen(true);
    }

    function closeModal(){
      setModalIsOpen(false);
    }
  
    function handleStatus() {
      setSensorStatus(false)
    }
    
    const listItems = sensors.map(({id, name, status}) =>
    <li key={id} className="list"> {name} 
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
      <Switch
        onChange={handleChange}
        checked={status}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={40}
        className="react-switch"
        id="material-switch"
      /> 
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
                  <input id="nome" value={sensorName} className="sensorNome" type="text" name="name" placeholder="Nome do sensor" />
                  <button className="confirm" onClick={(e) => setSensorName(e.target.value)}> Confirmar </button>
                  {console.log(sensorName)}
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