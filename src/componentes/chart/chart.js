import React from "react";
import {Line, Doughnut} from "react-chartjs-2"
import { userData } from "./dados";
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
 } from "chart.js";

 import './chart.css'

 ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
 )

const LineChart = ( {userData} ) => {

    const DataSemana1 ={
        labels  : ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        datasets: [{
            labels: 'Água gasta na semana',
            data: [8, 12, 5, 9, 15],
            backgroundColor: '#3ea175',
            borderColor: 'black',
            pointBorderColor: '#3ea175',
            fill: false,
        }]
    }

    const DataSemana2 ={
      labels  : ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      datasets: [{
          labels: 'Água gasta na semana',
          data: [3, 14, 19, 8, 6],
          backgroundColor: '#3ea175',
          borderColor: 'black',
          pointBorderColor: '#3ea175',
          fill: false,
      }]
  }

  const DataSemana3 ={
    labels  : ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    datasets: [{
        labels: 'Água gasta na semana',
        data: [6, 15, 17, 10, 20],
        backgroundColor: '#3ea175',
        borderColor: 'black',
        pointBorderColor: '#3ea175',
        fill: false,
    }]
}

    const DataDoughnut = {
      labels: [
        'Sensor 1',
        'Sensor 2',
        'Sensor 3'
      ],
      datasets: [{
        label: 'Litros Gastos',
        data: [49, 50, 68],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const OptSensor1 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sensor 1',
          },
        },
      };

      const OptSensor2 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sensor 2',
          },
        },
      };

      const OptSensor3 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sensor 3',
          },
        },
      };

      const OptDoughnut = {
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
    <>
      <div className="doughnutChart">
        <Doughnut
        data={DataDoughnut}
        options={OptDoughnut}
        ></Doughnut>
        <hr/>
      </div>
      <div className="lineChart">
          <Line  
          data={DataSemana1}
          options={OptSensor1}
          >
          </Line>
          <hr/>
      </div>
      <div className="lineChart">
          <Line  
          data={DataSemana2}
          options={OptSensor2}
          >
          </Line>
          <hr/>
      </div>
      <div className="lineChart">
          <Line  
          data={DataSemana3}
          options={OptSensor3}
          > 
          </Line>
      </div>
    </>
    )
}

export default LineChart;