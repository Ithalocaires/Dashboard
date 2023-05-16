import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  } from "chart.js";
  import Sidebar from "../../sidebar/sidebar";
  import "../register/register.css"
  
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  )
  
  function Register() {
  //   const [sidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <div>
        <Sidebar/>
          <div className="register">
              <h1 className="registerTitle">Bem-vindo, Usuário!</h1>
              <div className="registerContent">
                  <p className="registerInfo">Nome: Placeholder</p>
                  <p className="registerInfo">Email: Placeholder</p>
                  <p className="registerInfo">Idade: 40</p>
              </div>
          </div>
      </div>
    );
  }
  
  export default Register;