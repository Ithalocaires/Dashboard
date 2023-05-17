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
      <div className="userImg">
      <img className="userAvatar" src={avatar} />
      </div>
        <div className="user">
            <h1 className="userTitle">Bem-vindo, Carlos!</h1>
            <div className="userContent">
                <p className="userInfo">Nome:   Carlos Vieira da Silva</p>
                <p className="userInfo">Email:   CarlosV.Silva@gmail.com</p>
                <p className="userInfo">Idade:   27</p>
            </div>
        </div>
    </div>
  );
}

export default User;