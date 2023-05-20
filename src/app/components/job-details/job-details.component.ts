import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobTitle: string = '';
  jobDuration: string = '';
  jobEmployer: string = '';
  jobDescription: string = '';
  jobId: number = 0;

  job: any;

  constructor(private jobService: JobServiceService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.jobId = parseInt(this.actRoute.snapshot.paramMap.get('jobId') ?? '');
    this.jobService.getJob(this.jobId).subscribe(job => {
      this.jobTitle = job.title;
      this.jobDuration = job.duration;
      this.jobEmployer = job.employer;
      this.jobDescription = job.description;
    });
    this.job = this.jobService.getJob(this.jobId);
      if (!this.job) {
        this.router.navigateByUrl('/jobs');
      }
  }

  goBack(): void {
    this.router.navigate(['/jobs']);
  }
}