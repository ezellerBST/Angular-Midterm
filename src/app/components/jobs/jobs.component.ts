import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobServiceService } from 'src/app/services/job-service.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{
  
  jobList: any = [];

  constructor (private jobService: JobServiceService, private router: Router) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(list => {
      this.jobList = list;
    })
  }

}
