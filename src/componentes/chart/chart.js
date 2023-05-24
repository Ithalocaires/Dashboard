import React from "react";
import {Line, Doughnut} from "react-chartjs-2"
import Select from 'react-select'
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

const LineChart = () => {

    const DataSemana1 ={
        labels  : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
        datasets: [{
            label: 'Sensor 1',
            data: [83, 212, 139, 258, 143, 718, 894, 189, 568, 132, 594, 154],
            backgroundColor: '#36A2EB',
            borderColor: '#36A2EB',
            pointBorderColor: '#36A2EB',
            fill: false,
            },
            {
              label: 'Sensor 2',
              data: [325, 260, 340, 123, 98, 312, 142, 147, 695, 452, 124, 257],
              backgroundColor: '#FF6283',
              borderColor: '#FF6283',
              pointBorderColor: '#FF6283',
              fill: false,
            },
            {
              label: 'Sensor 3',
              data: [422, 124, 139, 258, 143, 151, 165, 156, 489, 359, 523, 474],
              backgroundColor: '#4ABFBF',
              borderColor: '#4ABFBF',
              pointBorderColor: '#4ABFBF',
              fill: false,
            }
          ]
        }

    const DataDoughnut = {
      labels: [
        'Sensor 1',
        'Sensor 2',
        'Sensor 3'
      ],
      datasets: [{
        label: 'Litros Gastos',
        data: [4084, 3275, 3403],
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

      const OptDoughnut = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Controle de gasto de água',
          },
        },
      };

      const SelectOpt = [
        {value: 'Semanal', label:'Semanal'},
        {value: 'Mensal', label:'Mensal'}

      ]

    return (
    <>
      <div className="doughnutChart">
        <Doughnut
        data={DataDoughnut}
        options={OptDoughnut}
        className="doughnut"
        
        ></Doughnut>
        <hr/>
        <Select className="Select1" options={SelectOpt}></Select>

      </div>
      <div className="lineChart">
          <Line  
          data={DataSemana1}
          options={OptSensor1}
          className="line"
          >
          </Line>
          <Select className="Select2" options={SelectOpt}></Select>

      </div>
    </>
    )
}

export default LineChart;