  import Sidebar from "../../sidebar/sidebar";
  import "../register/register.css"
  import { TfiPlus, TfiTrash } from "react-icons/tfi";
  

  const sensors = ['Sensor 1', 'Sensor 2', 'Sensor 3', 'Sensor 4', 'Sensor 5', 'Sensor 6'];
  const listItems = sensors.map((sensors) =>
  <li className="list">{sensors} <TfiTrash size={20} className="deleteIcon"></TfiTrash></li>
);
    
  function Register() {
    return (
      <div>
        <Sidebar/>

          <div className="register">             
   
              <h1 className="registerTitle">
                Registrar Sensores
                <TfiPlus size={25} className="addIcon" ></TfiPlus>
              </h1>
              <div className="registerContent">
                <ul className="ul">{listItems}</ul>
              </div>
          </div>
      </div>
    );
  }
  
  export default Register;