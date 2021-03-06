import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  public appMenuList = [
    {
      name: 'Academics',
      menus: [
        {
          title: 'My Courses',
          url: '/course',
          icon: 'school'          
        },
        {
          title: 'Subjects',
          url: '/subject',
          icon: 'book'
        },
        {
          title: 'Lead Source',
          url: '/leadSource',
          icon: 'bookmark'
        },
        {
          title: 'Expense Header',
          url: '/expenseHeader',
          icon: 'pricetag'
        },
        {
          title: 'Income Header',
          url: '/incomeHeader',
          icon: 'cash'
        },        
        {
          title: 'University',
          url: '/university',
          icon: 'library'
        },
        {
          title: 'Schedule',
          url: '/schedule',
          icon: 'time'
        },
        {
          title: 'Assignments',
          url: '/assignment',
          icon: 'hourglass'
        },
        {
          title: 'Attendance',
          url: '/attendance',
          icon: 'battery-full'
        },
        {
          title: 'Notifications',
          url: '/notification',
          icon: 'notifications'
        }
      ]
    },
    {
      name: 'My Account',
      menus: [
        {
          title: 'My Profile',
          url: '/profile',
          icon: 'person-circle'
        },
        {
          title: 'Billing',
          url: '/billing',
          icon: 'card'
        },
        {
          title: 'Change Password',
          url: '/folder/ChangePassword',
          icon: 'key'
        },
        {
          title: 'Logout',
          url: '/folder/Logout',
          icon: 'log-out'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
