import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

interface TopActiveUser {
  no: number;
  name: string;
  email: string;
  group: string;
  numberOfActiveDays: number;
}
interface AttractiveLesson {
  no: number;
  title: string;
  category: string[];
  status: string;
  createdDate: string;
  numberOfAttractiveLesson: number;
}

@Component({
  selector: 'ngx-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.scss']
})
export class AdminReportComponent implements OnInit {
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


  listOfData: TopActiveUser[] = [
    {
      "no": 1,
      "name": "Nguyễn Thành Long",
      "email": "thanh.long290291@gmail.com",
      "group": "EDC",
      "numberOfActiveDays": 42,
    },
    {
      "no": 2,
      "name": "Nguyễn Nhật Thành",
      "email": "thanh.nhat.bossa@gmail.com",
      "group": "EDC",
      "numberOfActiveDays": 31,
    },
    {
      "no": 3,
      "name": "Lý Khánh Trân",
      "email": "user3@gmail.com",
      "group": "Dealer",
      "numberOfActiveDays": 50,
    },
    {
      "no": 4,
      "name": "Nguyễn Anh Hùng",
      "email": "user4@gmail.com",
      "group": "Dealer",
      "numberOfActiveDays": 37,
    },
    {
      "no": 5,
      "name": "Hồ Lâm Anh",
      "email": "user5@gmail.com",
      "group": "Dealer",
      "numberOfActiveDays": 63,
    },
    {
      "no": 6,
      "name": "Võ Hoài Nam",
      "email": "user6@gmail.com",
      "group": "Dealer",
      "numberOfActiveDays": 41,
    },
    {
      "no": 7,
      "name": "Trần Thị Thanh Tâm",
      "email": "thanh.tam.tran30121988@gmail.com",
      "group": "EDC",
      "numberOfActiveDays": 39,
    },
    {
      "no": 8,
      "name": "Hoàng Phúc Nguyên",
      "email": "nguyen.hoangphuc@elancoah.vn",
      "group": "Staff",
      "numberOfActiveDays": 60,
    },
    {
      "no": 9,
      "name": "Trương Tấn Phát",
      "email": "phat.truongtan90@elancoah.vn",
      "group": "Staff",
      "numberOfActiveDays": 32,
    },
    {
      "no": 10,
      "name": "Hoàng Minh Phước",
      "email": "phuoc.hoangminh@outlook.com",
      "group": "Dealer",
      "numberOfActiveDays": 51,
    },
    {
      "no": 11,
      "name": "Hoàng Minh Phước",
      "email": "phuoc.hoangminh@outlook.com",
      "group": "Dealer",
      "numberOfActiveDays": 51,
    },
    {
      "no": 12,
      "name": "Nguyễn Thành Long",
      "email": "thanh.longnguyen81@gmail.com",
      "group": "EDC",
      "numberOfActiveDays": 70,
    }
  ];

  listOfDataListOfAttractiveLesson: AttractiveLesson[]=[
    {
      "no": 1,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "category": ["BU > LS > Heo", "Kênh > Trang trại"],
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022",
      "numberOfAttractiveLesson": 35
    },
    {
      "no": 2,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "category": ["BU > LS > Heo","Kênh > Trang trại","Nhóm sản phẩm > LS Product"],
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022",
      "numberOfAttractiveLesson": 33
    },
    {
      "no": 3,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022",
      "numberOfAttractiveLesson": 27
    },
    {
      "no": 4,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "category": ["BU > LS > Heo","Kênh > Trang trại","Nhóm sản phẩm > LS Product"],
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022",
      "numberOfAttractiveLesson": 26
    },
    {
      "no": 5,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022",
      "numberOfAttractiveLesson": 23
    },
    {
      "no": 6,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022",
      "numberOfAttractiveLesson": 20
    },
  ]

  currentViewAs: string = 'admin'

  constructor(
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
    this.createChartStatisticalCompletedLesson()
  }
  createChartStatisticalCompletedLesson() {
    let config = new Chart("ChartStatisticalCompletedLesson", {
      type: 'bar',
      data: {
        labels: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
        datasets: [
          {
            label: 'Số người dùng được assign',
            data: [25,55,32,22,46,76,43,23,17,50,49,41],
            backgroundColor: "#1695df",
          },
          {
            label: 'Số lượng hoàn thành bài học',
            data: [20,40,12,21,46,36,13,22,14,20,47,40],
            backgroundColor: "#FF8000",
          },

        ]
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: 'Số lượng hoàn thành trên tổng số được giao',
            position: 'top'
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    });
  }
  initDataReportAccessedUser() {
    this.dataReportAccessedUser = {
      labels: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
      datasets: [
        {
          label: 'Số lượng người dùng truy cập theo tháng',
          data: [120, 110, 101, 140, 160, 180, 150, 200, 190, 210, 260, 300],
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
            text: 'Số lượng người dùng truy cập',
            position: 'top'
          },
        },
        interaction: {
          intersect: false,
        }
      },
    });
  }
  onChangeHour() {
    this.dataReportAccessedUser = {
      labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
      datasets: [
        {
          label: 'Số lượng người dùng truy cập hàng giờ',
          data: [4, 5, 6, 10, 15, 6, 17, 4, 7, 23, 8],
          borderColor: '#3399FF',
          backgroundColor: 'rgba(51,153,255,0.5)',
          fill: true
        },
      ]
    }
    this.chartStatisticalAccessedUser.data = this.dataReportAccessedUser
    this.chartStatisticalAccessedUser.update()
  }
  onChangeDay() {
    this.dataReportAccessedUser = {
      labels: ['02/10/2023', '03/10/2023', '04/10/2023', '05/10/2023', '06/10/2023', '07/10/2023', '08/10/2023'],
      datasets: [
        {
          label: 'Số lượng người dùng truy cập hằng ngày',
          data: [40, 50, 60, 100, 105, 60, 0],
          borderColor: '#3399FF',
          backgroundColor: 'rgba(51,153,255,0.5)',
          fill: true
        },
      ]
    }
    this.chartStatisticalAccessedUser.data = this.dataReportAccessedUser
    this.chartStatisticalAccessedUser.update()
  }
  onChangeWeek() {
    this.dataReportAccessedUser = {
      labels: ['Tuần 40', 'Tuần 41', 'Tuần 42', 'Tuần 43', 'Tuần 44', 'Tuần 45', 'Tuần 46'],
      datasets: [
        {
          label: 'Số lượng người dùng truy cập hằng tuần',
          data: [200, 250, 300, 500, 505, 360, 52],
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

}

