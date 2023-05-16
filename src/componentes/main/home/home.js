
import { userData } from "../../chart/dados";
import { useState } from 'react';
import LineChart from "../../chart/chart";
import { 
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import Sidebar from "../../sidebar/sidebar";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Home( {UserData }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div>
      <Sidebar/>
      <div style={{ width: 700 }}>
        <LineChart/>
      </div>
    </div>
  );
}

export default Home;