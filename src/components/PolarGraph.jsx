import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

HighchartsMore(Highcharts);

export default function PolarChart({}) {
  useEffect(() => {
    const idArray = [
      "B0:52:16:5B:D9:4D",
      "C2:C7:36:64:A1:6D",
      "8E:E5:8A:FD:7D:09",
      "1E:C1:0C:44:B6:D2",
      "06:82:3D:43:43:C1",
      "1A:7B:33:BF:B8:02",
      "06:82:3D:43:47:39",
      "EA:48:B8:14:A8:C6",
      "06:82:3D:43:6B:E7",
      "06:82:3D:43:65:09",
      "06:82:3D:43:42:9B",
      "C4:6E:1F:63:3D:12",
      "3A:AF:C5:78:57:8B",
    ];
    const pointsArray = [52, 45, 38, 65, 47, 51, 42, 48, 40, 37, 31, 19, 1];

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
        enabled: false,
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
              const id = idArray[pointIndex];
              const value = pointsArray[pointIndex];

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
          data: pointsArray,
        },
      ],
    };

    Highcharts.chart("polar", chartOptions);
  }, []);

  return (
    <div
      id="polar"
      className="flex justify-center items-center h-[80%] w-[90%] border rounded-lg bg-[#0F4C75] bg-opacity-20"
    >
      <HighchartsReact highcharts={Highcharts} options={{}} />
    </div>
  );
}
