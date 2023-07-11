import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./../Assets/Css/Chart.css"
import { Card } from "react-bootstrap";
const ApexChart = () => {
  const [series] = useState([44, 55, 13]);
  const [options] = useState({
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    legend: {
      position: 'bottom'
    },
    colors:['#AD00D8','#00A500'],
  });

  return (
    <div id="chart" style={{marginTop:"20px"}}>
      <Card>
        <Card.Body style={{padding:"20px", height:"400px"}}>
        <ReactApexChart style={{marginTop:"40px"}} options={options} series={series} type="donut" width={350} />
        </Card.Body>
        </Card>
        </div>
  );
};

export default ApexChart;
