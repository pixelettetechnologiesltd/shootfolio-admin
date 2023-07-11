import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./../Assets/Css/Chart.css"
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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '225px' }}>
        <ReactApexChart options={options} series={series} type="donut" width={225} />
      </div>
    </div>
  );
};

export default ApexChart;
