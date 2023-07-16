import React from 'react'
import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsNetworkgraph from 'highcharts/modules/networkgraph';
import HighchartsExporting from 'highcharts/modules/exporting';


// Initialize Highcharts modules

export default function GenerateGraph({ data }) {
    HighchartsNetworkgraph(Highcharts);
    HighchartsExporting(Highcharts);


    const nodes = [];

    data.forEach(arr => {
        nodes.push([arr[0], arr[1]])
        nodes.push([arr[1], arr[2]])
    })


    useEffect(() => {
        (function (H) {
            H.wrap(H.seriesTypes.networkgraph.prototype.pointClass.prototype, 'getLinkPath', function (p) {
                var left = this.toNode,
                    right = this.fromNode;

                var angle = Math.atan((left.plotX - right.plotX) /
                    (left.plotY - right.plotY));


                if (angle) {
                    let path = ['M', left.plotX, left.plotY, right.plotX, right.plotY],
                        lastPoint = left,
                        nextLastPoint = right,
                        pointRadius = 25,
                        arrowLength = 10,
                        arrowWidth = 10;

                    if (left.plotY < right.plotY) {
                        path.push(
                            nextLastPoint.plotX - pointRadius * Math.sin(angle),
                            nextLastPoint.plotY - pointRadius * Math.cos(angle),
                        );
                        path.push(
                            nextLastPoint.plotX - pointRadius * Math.sin(angle) - arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle),
                            nextLastPoint.plotY - pointRadius * Math.cos(angle) - arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle),
                        );

                        path.push(
                            nextLastPoint.plotX - pointRadius * Math.sin(angle),
                            nextLastPoint.plotY - pointRadius * Math.cos(angle),
                        );
                        path.push(
                            nextLastPoint.plotX - pointRadius * Math.sin(angle) - arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle),
                            nextLastPoint.plotY - pointRadius * Math.cos(angle) - arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle),
                        );


                    } else {
                        path.push(
                            nextLastPoint.plotX + pointRadius * Math.sin(angle),
                            nextLastPoint.plotY + pointRadius * Math.cos(angle),
                        );
                        path.push(
                            nextLastPoint.plotX + pointRadius * Math.sin(angle) + arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle),
                            nextLastPoint.plotY + pointRadius * Math.cos(angle) + arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle),
                        );
                        path.push(
                            nextLastPoint.plotX + pointRadius * Math.sin(angle),
                            nextLastPoint.plotY + pointRadius * Math.cos(angle),
                        );
                        path.push(
                            nextLastPoint.plotX + pointRadius * Math.sin(angle) + arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle),
                            nextLastPoint.plotY + pointRadius * Math.cos(angle) + arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle),
                        );

                    }

                    return path
                }
                return [
                    ['M', left.plotX || 0, left.plotY || 0],
                    ['L', right.plotX || 0, right.plotY || 0],
                ];
            });
        }(Highcharts));


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
                        linkLength: 100,

                    },

                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 8,

                        lineColor: 'blue',
                        radius: 15
                    },
                    link: {
                        color: 'blue',
                        dashStyle: 'dash',
                        linkDirection: 'both'
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
                data: nodes,
            }]
        };

        Highcharts.chart('new', chartOptions);
    }, []);
    return (
        <div id="new" className='flex justify-center items-center bg-gray-100 rounded-2xl p-10 h-[80%] '></div>

    )
}
