import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { endOfMonth } from 'date-fns';
import { ChangeTitleService } from '../../../change-title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-report-activities',
  templateUrl: './report-activities.component.html',
  styleUrls: ['./report-activities.component.scss']
})
export class ReportActivitiesComponent implements OnInit {
  chartTotalUserOnlineInWeek: any;
  date: any
  ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  constructor(
    private i18n: NzI18nService,
    private changeTitleService: ChangeTitleService,
    private router: Router
  ) {
    Chart.register(...registerables);
    this.i18n.setLocale(en_US);
    this.changeTitleService.setDataTitle("Báo cáo hoạt động")
  }

  ngOnInit(): void {
    this.createChartTotalUserOnlineInWeek()
    this.createChartCountRegisteredAndCompletedCourse()
  }

  createChartTotalUserOnlineInWeek() {
    this.chartTotalUserOnlineInWeek = new Chart("ChartTotalUserOnlineInWeek", {
      type: 'line',
      data: {
        labels: ['12/08', '13/08', '14/08', '15/08', '16/08', '17/08', '18/08'],
        datasets: [
          {
            data: [5, 26, 13, 45, 40, 20, 20],
            borderColor: 'rgb(90, 74, 153)',
            backgroundColor: 'rgb(90, 74, 153)',
            pointRadius: 1,
            pointHoverRadius: 12,
            borderWidth: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'loc',
          },
          tooltip: {
            enabled: false,
            external: this.externalTooltipHandler,
          },
          legend: {
            display: false
          },

        }
      }
    });
  }

  externalTooltipHandler(context) {
    const { chart, tooltip } = context;

    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.style.background = 'rgba(255, 255, 255, 1)';
      tooltipEl.style.borderRadius = '10px';
      tooltipEl.style.color = 'black';
      tooltipEl.style.borderWidth = '1px';
      tooltipEl.style.borderColor = '#000000';
      tooltipEl.style.opacity = 100;
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, -100%)';
      tooltipEl.style.transition = 'all .1s ease';
      tooltipEl.style.boxShadow = '10px 10px 10px rgba(148, 148, 148, 1)';

      const table = document.createElement('table');
      table.style.margin = '10px';

      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map(b => b.lines);

      const tableHead = document.createElement('thead');

      titleLines.forEach(title => {
        const tr = document.createElement('tr');
        tr.style.borderWidth = '0';

        const th = document.createElement('th');
        th.style.borderWidth = '0';
        th.style.color = 'rgba(60, 60, 67, 0.60)';

        const text = document.createTextNode(title);

        th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
      });

      const tableBody = document.createElement('tbody');
      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i];

        const span = document.createElement('span');
        span.style.background = colors.backgroundColor;
        span.style.borderColor = colors.borderColor;
        span.style.borderWidth = '2px';
        span.style.marginRight = '10px';
        span.style.height = '30px';
        span.style.width = '30px';
        span.style.display = 'inline-block';

        const tr = document.createElement('tr');
        tr.style.backgroundColor = 'inherit';
        tr.style.borderWidth = '0';

        const td = document.createElement('td');
        td.style.borderWidth = '0';
        td.style.color = '#11263C';
        td.style.fontSize = '20px';

        const text = document.createTextNode(body);

        td.appendChild(text);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });

      const tableFooter = document.createElement('tbody');
      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = '0';

      const td = document.createElement('td');
      td.style.borderWidth = '0';
      td.style.color = 'rgba(60, 60, 67, 0.60)';

      const text = document.createTextNode('user online trong tuần');

      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);

      const tableRoot = tooltipEl.querySelector('table');

      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }

      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
      tableRoot.appendChild(tableFooter);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
  }

  createChartCountRegisteredAndCompletedCourse() {
    this.chartTotalUserOnlineInWeek = new Chart("ChartCountRegisteredAndCompletedCourse", {
      type: 'line',
      data: {
        labels: ['Feb', 'Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Đăng ký khoá học',
            data: [12, 11, 11, 14, 16, 18, 15, 20, 19, 21, 26, 30],
            borderColor: '#1695df',
            backgroundColor: '#1695df',
            fill: true
          },
          {
            label: 'Hoàn thành khoá học',
            data: [32, 35, 39, 40, 48, 55, 59, 67, 69, 70, 72, 79],
            borderColor: '#F5A067',
            backgroundColor: '#F5A067',
            fill: true
          }
        ]
      },
      options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: false,
            text: '(ctx) =>  + ctx.chart.options.plugins.filler.drawTime'
          }
        },
        interaction: {
          intersect: false,
        }
      },
    });
  }

  backToLesson() {
    this.router.navigate(['pages','lessons']);
  }

}
