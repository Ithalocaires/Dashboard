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
import { DateRangePicker } from 'rsuite';
import {useState} from 'react'
import 'rsuite/dist/rsuite.min.css';
import './chart.css'

 ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
 )

 

const LineChart = () => {

  var dataMensal1 = [9047, 5411, 6821, 3999, 5851, 5992, 2809, 8148, 6182, 8950, 7758, 9080];
  var dataMensal2 = [7715, 6568, 6450, 8719, 5475, 4656, 8880, 2835, 8640, 4854, 6885, 3617];
  var dataMensal3 = [5246, 5378, 4181, 9465, 9527, 6906, 5878, 5154, 4562, 6111, 8323, 4511];
  var dataSemana1 = [189, 145, 81, 147, 161, 130, 94]
  var dataSemana2 = [141, 154, 144, 164, 122, 117, 176]
  var dataSemana3 = [119, 170, 92, 181, 84, 185, 172]
  var totalMes = [80048, 75294, 75242];
  var totalSemana = [947, 1018, 1003];

    const dataMeses ={
        labels  : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
        datasets: [{
            label: 'Sensor 1',
            fontColor: 'rgb(80, 176, 158)',
            data: dataMensal1,
            backgroundColor: 'rgb(80, 176, 158)',
            borderColor: 'rgb(80, 176, 158)',
            pointBorderColor: 'rgb(80, 176, 158)',
            fill: false,
            },
            {
              label: 'Sensor 2',
              data: dataMensal2,
              backgroundColor: 'rgb(54, 162, 235)',
              borderColor: 'rgb(54, 162, 235)',
              pointBorderColor: 'rgb(54, 162, 235)',
              fill: false,
            },
            {
              label: 'Sensor 3',
              data: dataMensal3,
              backgroundColor: 'rgb(255, 205, 86)',
              borderColor: 'rgb(255, 205, 86)',
              pointBorderColor: 'rgb(255, 205, 86)',
              fill: false,
            }
          ]
        }

        const dataSemanas ={
          labels  : ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo' ],
          datasets: [{
              label: 'Sensor 1',
              data: dataSemana1,
              backgroundColor: 'rgb(80, 176, 158)',
              borderColor: 'rgb(80, 176, 158)',
              pointBorderColor: 'rgb(80, 176, 158)',
              fill: false,
              },
              {
                label: 'Sensor 2',
                data: dataSemana2,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                pointBorderColor: 'rgb(54, 162, 235)',
                fill: false,
              },
              {
                label: 'Sensor 3',
                data: dataSemana3,
                backgroundColor: 'rgb(255, 205, 86)',
                borderColor: 'rgb(255, 205, 86)',
                pointBorderColor: 'rgb(255, 205, 86)',
                fill: false,
              }
            ]
          }

    const dataDoughnutMes = {
      labels: [
        'Sensor 1',
        'Sensor 2',
        'Sensor 3'
      ],
      datasets: [{
        label: 'Litros Gastos',
        data: totalMes,
        backgroundColor: [
          'rgb(80, 176, 158)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: '#282F3C',
        hoverOffset: 4
      }]
    };

    const dataDoughnutSemana= {
      labels: [
        'Sensor 1',
        'Sensor 2',
        'Sensor 3'
      ],
      datasets: [{
        label: 'Litros Gastos',
        data: totalSemana,
        backgroundColor: [
          'rgb(80, 176, 158)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: '#282F3C',
        hoverOffset: 4
      }]
    };

    const optSensor1 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            color: 'rgb(255, 255, 255)',
            labels :{
              render: 'label',
              color: ['rgb(255, 255, 255)'],
  
  
            },
          },
         
          title: {
            display: true,
            text: 'Sensores',
            color: 'rgb(255, 255, 255)',
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white"
            },
            grid: {
              display: false,
            },
            
          },
          y: {
            ticks: {
              color: "white",
            },
            grid: {
              color: '#717171',
              lineWidth: 0.3,
            },
            beginAtZero: true
          }
        },
      };

      const optDoughnut = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            color: 'rgb(255, 255, 255)',
            labels :{
              fontColor: 'rgb(255, 255, 255)',
              fontSize: 1,
            },
          },
          title: {
            display: true,
            text: 'Controle de gasto de água',
            color: 'rgb(255, 255, 255)',
          },
          
        },
      };

      const [selectedOpt, setSelectedOpt] = useState();

      const handleChange = (event) => {
        setSelectedOpt(event.value);
      };
    
      
      const SelectOpt = [
        {value: 'Semanal', label:'Semanal'},
        {value: 'Mensal', label:'Mensal'},
      ]

      const AltChart = (mensal) =>{
      setSelectedOpt(mensal.value)
      }

    return (
    <>
      <div className="doughnutChart">
      {selectedOpt?
        <Doughnut
        data={dataDoughnutSemana}
        options={optDoughnut}
        className="doughnut"
        ></Doughnut>
        :
        <Doughnut
        data={dataDoughnutMes}
        options={optDoughnut}
        className="doughnut"
        ></Doughnut>
      }
        <hr/>
        <Select className="Select1" value={selectedOpt} options={SelectOpt} onChange={AltChart}>
        </Select>

			 {selectedOpt?
        <DateRangePicker 
        className="datePicker" 
        hoverRange="week" 
        isoWeek ranges={[]} 
        showWeekNumbers size="md"
        placeholder='Selecione a data'
        showOneCalendar
        />

			 :
        <DateRangePicker
        className="datePicker" 
        hoverRange="month" 
        ranges={[]}
        placeholder='Selecione a data' 
        showOneCalendar
        />
       }

      </div>
      <div className="lineChart">
        {selectedOpt?
          <Line  
          data={dataSemanas}
          options={optSensor1}
          className="line"
          >
          </Line>
          :
          <Line  
          data={dataMeses}
          options={optSensor1}
          className="line"
          >
          </Line>

}
      </div>
    </>
    )
}

export default LineChart;