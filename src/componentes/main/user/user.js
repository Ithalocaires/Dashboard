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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function User() {
  return (
    <div>
      <Sidebar/>
        <div className="user">
            <h1 className="userTitle">Bem-vindo, Usuário!</h1>
            <div className="userContent">
                <img className="userAvatar" src="avatar.png" />
                <p className="userInfo">Nome: Placeholder</p>
                <p className="userInfo">Email: Placeholder</p>
                <p className="userInfo">Idade: 40</p>
            </div>
        </div>
    </div>
  );
}

export default User;