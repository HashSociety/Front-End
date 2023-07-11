import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsNetworkgraph from 'highcharts/modules/networkgraph';
import HighchartsExporting from 'highcharts/modules/exporting';
import "./App.css"

// Initialize Highcharts modules
HighchartsNetworkgraph(Highcharts);
HighchartsExporting(Highcharts);

const NetworkGraph = () => {
  useEffect(() => {
    const chartOptions = {
      chart: {
        type: 'networkgraph',
        backgroundColor: 'transparent',

      },
      title: {
        text: ''
      },
      plotOptions: {
        networkgraph: {
          layoutAlgorithm: {
            linkLength: 50 // in pixels
          },
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 8,

            lineColor: 'blue',
            radius: 15
          },
          link: {
            color: 'blue',
            dashStyle: 'dash'
          }

        }
      },
      series: [{

        dragable: false,
        dataLabels: {
          enabled: true,
          linkFormat: '',
          style: {
            color: 'black', 
            fontSize: '16px', 
            fontWeight: 'bold', 
          },
          y: -20,
        },
        id: 'lang-tree',
        data: [
          ['4c:34:88:90:77:48', '02:66:bf:8b:1a:bb'],
          ['12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],
          ['12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
          ['33:33:00:00:00:16', '12:89:01:e1:70:8b'],
          ['01:00:5e:00:00:16', '12:89:01:e1:70:8b'],
          ['4c:34:88:90:77:48', '33:33:ff:d8:8f:75'],
          ['12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
          ['12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],
          ['12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
          ['12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
          ['4c:34:88:90:77:48', '12:89:01:e1:70:8b'],
          ['02:66:bf:8b:1a:bb', '4c:34:88:90:77:48'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],
          ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b'],

        ]
      }]
    };

    Highcharts.chart('new', chartOptions);
  }, []);

  return (
    <div className=' h-screen w-screen flex justify-center items-center flex-col gap-10'>
      <div className='font-bold text-3xl' >Mesh Hawk</div>
      <div id="new" className='flex justify-center items-center bg-gray-100 rounded-2xl p-10 h-[80%] '></div>
    </div>

  );
};

export default NetworkGraph;
