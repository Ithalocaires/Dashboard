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
      {id: 2, name: 'Sensor 2', status: false},
      {id: 3, name: 'Sensor 3', status: false},
    ]);

    // A constante auxSensor é um clone do array sensors para ser
    // manipulado na função 'handleChange'
    const auxSensors = [...sensors]
    const [sensorName, setSensorName] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    
    // Função para abrir o Modal
    function openModal(){
      setModalIsOpen(true);
    }

    // Função para fechar o Modal
    function closeModal(){
      setModalIsOpen(false);
    }

    // Esta função deleta o sensor do array a partir do id do mesmo
    const handleDeleteSensor = (id) => {
      const updatedSensors = sensors.filter((sensor) => sensor.id !== id); 
      setSensors(updatedSensors);
    };

    const handleAddSensor = () => {
      const newSensor = {
        id: sensors.length + 1, // Gera um novo id para o sensor
        name: sensorName,
        status: false // Define o status inicial como false (OFF)
      };
    
      setSensors([...sensors, newSensor]);
      closeModal();
    };



    // A função listItems engloba todas as outras que 
    // são responsáveis por renderizar em formato de lista os elementos
    // no Array 'sensors'
    const listItems = sensors.map(({ id, name, status }) => {

      // A função handleChange é a que faz a mudança de
      // estado de cada sensor e também do switch que cada um tem
      const handleChange = (nextChecked) => {
        setChecked(nextChecked);
        const updatedSensors = auxSensors.map((item) => {
          if (item.id === id) {
            return { ...item, status: !item.status };
          }
          return item;
        });
        setSensors(updatedSensors);
      };
    
      // Este return traz os sensores presentes do array 'sensors' em formato de lista
      // fazendo uma verificação no status do sensor para renderizar um ON ou um OFF
      // o componente <switch> é da biblioteca React-Switch
      return (
        <li key={id} className="list">
          {name}
          <h6 className="statusText">
            status:
            {status ? (
              <p className="statusON"> ON </p>
            ) : (
              <p className="statusOFF"> OFF </p>
            )}
          </h6>
          <a className="deleteSensor" onClick={() => handleDeleteSensor(id)}>
            <TfiTrash size={20} className="deleteIcon"></TfiTrash>
          </a>
          <Switch
            onChange={(nextChecked) => handleChange(nextChecked)}
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
    });


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
               <h2 className='modalText'>Cadastrar Sensor</h2>
               <label className="modalLabel">
                  Nome do sensor:
                  <input
                    id="nome"
                    value={sensorName}
                    onChange={(e) => setSensorName(e.target.value)}
                    className="sensorNome"
                    type="text"
                    name="name"
                    placeholder="Nome do sensor"
                  />
                  <button className="confirm" onClick={handleAddSensor}> Confirmar </button>
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