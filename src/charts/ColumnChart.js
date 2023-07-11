import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "react-bootstrap";
const ColumnChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Income",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Users",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors:['#AD00D8','#00A500'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
         
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div id="chart" style={{marginTop:"20px"}}>
      <Card>
        <Card.Body style={{padding:"20px"}}>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ColumnChart;
