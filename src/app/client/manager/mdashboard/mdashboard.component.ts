import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';
@Component({
  selector: 'app-mdashboard',
  templateUrl: './mdashboard.component.html',
  styleUrl: './mdashboard.component.scss'
})
export class MdashboardComponent {
  items=[
    {img:'assets/images/group.png',name:'teamMembers',count:'10'},
    {img:'assets/images/teamvelocity.png',name:'teamvelocity',count:'56'},
    {img:'assets/images/su.png',name:'task delivered',count:'40'},
    {img:'assets/images/event.png',name:'new events',count:'17'},
  
  ]

  loggedInUsername!: string;
  
  // constructor(private userService: SessionhandlingService) { }
  
  // date!:Date;
  // year!: number;
  // month!: number;
  // months!: string[];
  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
  }
  // ngOnInit(): void {
  //   this.date = new Date();
  //   this.year = this.date.getFullYear();
  //   this.month = this.date.getMonth();
  //   this.months = [
  //     "January", "February", "March", "April",
  //     "May", "June", "July", "August",
  //     "September", "October", "November", "December"
  //   ];
  //   this.manipulate();

  //   this.loggedInUsername = this.userService.getLoggedInUsername() || '';
  // }

  // manipulate(): void {
  //   const day = document.querySelector(".calendar-dates") as HTMLElement;
  //   let currdate = document.querySelector(".calendar-current-date") as HTMLElement;
  
  //   let dayone = new Date(this.year, this.month, 1).getDay();
  //   let lastdate = new Date(this.year, this.month + 1, 0).getDate();
  //   let dayend = new Date(this.year, this.month, lastdate).getDay();
  //   let monthlastdate = new Date(this.year, this.month, 0).getDate();
  
  //   let lit = "";
  
  //   for (let i = dayone; i > 0; i--) {
  //     lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  //   }
  
  //   for (let i = 1; i <= lastdate; i++) {
  //     let isToday = i === this.date.getDate() && this.month === new Date().getMonth() && this.year === new Date().getFullYear() ? "active" : "";
  //     lit += `<li class="${isToday}">${i}</li>`;
  //   }
  
  //   for (let i = dayend; i < 6; i++) {
  //     lit += `<li class="inactive">${i - dayend + 1}</li>`;
  //   }
  
  //   if (currdate !== null) {
  //     currdate.innerText = `${this.months[this.month]} ${this.year}`;
  //   }
  
  //   if (day !== null) {
  //     day.innerHTML = lit;
  //   }
  // }
  // onIconClick(isPrev: boolean): void {
  //   this.month = isPrev ? this.month - 1 : this.month + 1;

  //   if (this.month < 0 || this.month > 11) {
  //     this.date = new Date(this.year, this.month, new Date().getDate());
  //     this.year = this.date.getFullYear();
  //     this.month = this.date.getMonth();
  //   } else {
  //     this.date = new Date();
  //   }
  //   this.manipulate();
  // }

  currentDate: string;
  calendarDays: { day: number; isActive: boolean }[] = [];

  constructor(private userService: SessionhandlingService) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    this.currentDate = `${this.getMonthName(month)} ${year}`;

    this.generateCalendar(year, month);
  }

  onIconClick(isPrevious: boolean): void {
    const date = new Date();
    const currentMonth = date.getMonth();

    if (isPrevious) {
      date.setMonth(currentMonth - 1);
    } else {
      date.setMonth(currentMonth + 1);
    }

    const year = date.getFullYear();
    const month = date.getMonth();

    this.currentDate = `${this.getMonthName(month)} ${year}`;
    this.generateCalendar(year, month);
  }

  private generateCalendar(year: number, month: number): void {
    const calendarDays: { day: number; isActive: boolean }[] = [];

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    for (let i = 1; i <= lastDate; i++) {
      calendarDays.push({ day: i, isActive: i === new Date().getDate() && month === new Date().getMonth() });
    }

    this.calendarDays = calendarDays;
  }

  private getMonthName(monthIndex: number): string {
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    return months[monthIndex];
  }
  }
  