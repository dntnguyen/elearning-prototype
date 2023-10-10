import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

interface EventElearning {
  no: number;
  name: string;
  type: string;
  time: string;
  location: string;
  status: string;
}

interface ExpiringCertificate {
  no: number;
  name: string;
  expiredTime: string;
}

@Component({
  selector: 'ngx-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {
  dataReportAccessedUser: any
  chartStatisticalAccessedUser: any;
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  total = 50;
  pageSize = 10;
  pageIndex = 1;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfData.forEach((data, index) => this.updateCheckedSet(data.no, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfData.forEach((data, index) => this.updateCheckedSet(data.no, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];


  listOfData: EventElearning[] = [
    {
      no: 1,
      name: "Giới thiệu các khóa học năm 2024",
      type: "Online",
      time: "20/10/2023",
      location: 'Zoom',
      status: "Đã đăng ký",
    },
    {
      no: 2,
      name: "Giới thiệu sản phẩm mới tháng 10/2023",
      type: "Online",
      time: "30/10/2023",
      location: 'Zoom',
      status: "Đã từ chối",
    },
    {
      no: 3,
      name: "Giới thiệu sản phẩm mới tháng 09/2023",
      type: "Online",
      time: "20/10/2023",
      location: 'Google Meet',
      status: "Đã tham gia",
    },
  ];

  listOfDataExpiringCertificate: ExpiringCertificate[] = [
    {
      no: 1,
      name: 'Chứng chỉ 1',
      expiredTime: '10/12/2023',
    },
    {
      no: 2,
      name: 'Chứng chỉ 2',
      expiredTime: '21/12/2023',
    },
    {
      no: 3,
      name: 'Chứng chỉ 3',
      expiredTime: '25/12/2023',
    },
  ];

  currentViewAs: string = 'admin'

  constructor(
    private router: Router
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let viewAs = localStorage.getItem("viewAs")
    if (!viewAs) {
      viewAs = 'admin'
    }

    this.currentViewAs = viewAs

    this.initDataReportAccessedUser()

    this.createChartStatisticalAccessedUser()
  }

  initDataReportAccessedUser() {
    this.dataReportAccessedUser = {
      labels: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
      datasets: [
        {
          label: 'Thời gian học hàng tháng',
          data: [13, 15, 12, 10, 7, 13, 10, 11, 9, 0, 0, 0],
          borderColor: '#3399FF',
          backgroundColor: 'rgba(51,153,255,0.5)',
          fill: true
        },
      ]
    }
  }
  createChartStatisticalAccessedUser() {
    this.chartStatisticalAccessedUser = new Chart("ChartStatisticalAccessedUser", {
      type: 'line',
      data: this.dataReportAccessedUser,
      options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: false,
            text: 'Thời gian học',
            position: 'top'
          },
        },
        interaction: {
          intersect: false,
        }
      },
    });
  }


  onChangeWeek() {
    this.dataReportAccessedUser = {
      labels: ['Tuần 40', 'Tuần 41', 'Tuần 42', 'Tuần 43', 'Tuần 44', 'Tuần 45', 'Tuần 46'],
      datasets: [
        {
          label: 'Thời gian học hàng tuần',
          data: [2, 3, 5, 1, 6, 2, 3],
          borderColor: '#3399FF',
          backgroundColor: 'rgba(51,153,255,0.5)',
          fill: true
        },
      ]
    }
    this.chartStatisticalAccessedUser.data = this.dataReportAccessedUser
    this.chartStatisticalAccessedUser.update()
  }
  onChangeMonth() {
    this.initDataReportAccessedUser()
    this.chartStatisticalAccessedUser.data = this.dataReportAccessedUser
    this.chartStatisticalAccessedUser.update()
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfData.forEach(item => this.updateCheckedSet(item.no, value));
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfData.every(item => this.setOfCheckedId.has(item.no));
    this.indeterminate = this.listOfData.some(item => this.setOfCheckedId.has(item.no)) && !this.checked;
  }

  myExams() {
    this.router.navigate(['pages','my-exams']);
  }

  goToMyExamView() {
    this.router.navigate(['pages','my-exam-views'], { queryParams: { id: 1 } });
  }
}

