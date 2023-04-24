import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions = {}

  constructor() {

    this.chartOptions = {
      // give chart configure data from highcharts

      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Average students Admission , 2022-23',
        align: 'left'
    },
 
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    // credites kodukunne ethu siteil ninnu aano itu eduthe ennu ettavum thaazhe athu kaanikum atu kaanathirin AANU
    credits:{
      enabled:false
    }
    ,
    series: [{
        type: 'pie',
        name: 'count',
        data: [
            ['MEARN', 23],
            ['PYTHON', 18],
            ['ASP.NET', 9],
            ['FLUTTER', 9],
            ['BIGDATA', 8],
            ['TESTING', 30]
        ]
    }]

    }
  }

}
