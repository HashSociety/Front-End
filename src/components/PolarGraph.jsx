import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

export default function PolarChart({ bssidArray, power }) {
  useEffect(() => {
    const filteredPower = power
      .filter((value) => !isNaN(value))
      .map((value) => Math.abs(value));

    console.log(bssidArray);
    console.log(filteredPower);
    const chartOptions = {
      chart: {
        polar: true,
        backgroundColor: "transparent",
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
      },
      xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
      },
      yAxis: {
        min: 0,
        labels: {
          style: {
            color: "white",
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      plotOptions: {
        series: {
          pointStart: 0,
          pointInterval: 45,

          dataLabels: {
            enabled: true,
            formatter: function () {
              // Get the index of the current point
              const pointIndex = this.point.index;

              // Get the corresponding ID and data value from the arrays
              const id = bssidArray[pointIndex];
              const value = filteredPower[pointIndex];

              const localBssidArray = bssidArray;
              const localPower = filteredPower;
              // Customize the label using the ID and value
              return `ID: ${id}, Value: ${value}`;
            },
            style: {
              color: "white", // Label text color
            },
          },
        },
        column: {
          pointPadding: 0,
          groupPadding: 0,
        },
      },
      series: [
        {
          type: "area",
          name: "Power",
          data: filteredPower,
        },
      ],
    };

    Highcharts.chart("polar", chartOptions);
  }, []);
    
  return (
    <div
      id="polar"
      className="flex justify-center items-center max-h-[100%] max-w-[100%] border rounded-lg bg-[#0F4C75] bg-opacity-20"
    >
      <HighchartsReact highcharts={Highcharts} options={{}} />
    </div>
  );
}
