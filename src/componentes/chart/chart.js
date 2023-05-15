import React from "react";
import {Line} from "react-chartjs-2"
import { userData } from "./dados";
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
 } from "chart.js";

 import './chart.css'

 ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
 )

const LineChart = ( {userData} ) => {

    const DataSemana ={
        labels  : ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        datasets: [{
            labels: 'Água gasta na semana',
            data: [8, 12, 5, 9, 15],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
            fill: false,
        }]
    }

    const DataMes ={
        labels  : ['1ª semana', '2ª Semana', '3ª Semana', '4ª Semana'],
        datasets: [{
            labels: 'Água gasta no mês',
            data: [60, 90, 59, 78, 81],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
            fill: false,
        }]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Controle de gasto de água',
          },
        },
      };

    return (
    <div className="chart">
        <Line  
        data={DataSemana}
        options={options}
        >
            
        </Line>
    </div>
    )
}

export default LineChart;