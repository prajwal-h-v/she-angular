import { Component, OnInit } from '@angular/core';
import { PendingStats } from 'src/app/model/PendingStats';

import { Statistics } from 'src/app/model/Statistics';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  stats: Statistics;
  pendingStats: PendingStats;
  constructor(
    private adminService: AdminService,
    private userService: UserService
  ) {
    this.pendingStats = new PendingStats();
  }

  ngOnInit(): void {
    this.adminService.getStatistics().subscribe((stats) => {
      this.stats = stats;
      console.log(this.stats);
    });
    this.adminService.getPendingCourses().subscribe((data) => {
      this.pendingStats.courseCount = data.length;
    });

    this.adminService.getPendingNgo().subscribe((data) => {
      this.pendingStats.ngoCount = data.length;
    });
    this.adminService.getPendingHostels().subscribe((data) => {
      this.pendingStats.hostelCount = data.length;
    });
    this.userService.getPendingUsers().subscribe((data) => {
      this.pendingStats.userCount = data.length;
    });
  }
}
