import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more'; 

HighchartsMore(Highcharts);


export default function PolarChart({  }) {
  useEffect(() => {
    const chartOptions = {
      chart: {
        polar: true,
        backgroundColor: 'transparent',
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
      },
      xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
          format: '{value}°',
          style: {
            color: 'white', // Change x-axis label text color here
          },
        },
      },
      yAxis: {
        min: 0,
        labels: {
          style: {
            color: 'white', // Change y-axis label text color here
          },
        },
      },
      plotOptions: {
        series: {
          pointStart: 0,
          pointInterval: 45,
        },
        column: {
          pointPadding: 0,
          groupPadding: 0,
        },
      },
      series: [
        {
          type: 'column',
          name: 'Column',
          data: [8, 7, 6, 5, 4, 3, 2, 1],
          pointPlacement: 'between',
        },
        {
          type: 'line',
          name: 'Line',
          data: [8, 7, 6, 5, 4, 3, 2, 1],
        },
        {
          type: 'area',
          name: 'Area',
          data: [8, 7, 6, 5, 4, 3, 2, 1],
        },
      ],
    };

    Highcharts.chart('polar', chartOptions);
  }, []);

  return (
    <div id="polar" >
      <HighchartsReact highcharts={Highcharts} options={{}} />
    </div>
  );
}
