import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobDetailsComponent } from '../components/job-details/job-details.component';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  listOfJobs: any[] = [
    {
      id: 1,
      title: "Construction Project Engineer - Nuclear",
      description: "Development and tracking of performance across new constrution of a nuclear uranium enrichment facility",
      duration: "(2 years)",
      employer: "CJ Design Concepts"
    },
    {
      id: 2,
      title: "Construction Project Engineer",
      description: "Design, survey, and management of city renovation projects including roads, sidewalks, and drainage",
      duration: "(1 year)",
      employer: "City of Hobbs Engineering"
    },
    {
      id: 3,
      title: "Construction Project Manager",
      description: "Manage design, budget, procurement, and construction of small and large scale commercial glass projects",
      duration: "(2 years)",
      employer: "Forman Ford Glazing"
    },
    {
      id: 4,
      title: "Assistant Head Swim Coach",
      description: "Manage development of various age-group club swimmers in conjunction with meet entry, team coordination, travel, and equipment maintenance",
      duration: "(2 years)",
      employer: "Central Iowa Aquatics"
    },
    {
      id: 5,
      title: "Registered Nurse",
      description: "Inpatient hospital experience providing, coordinating, and educating patient care across multiple disciples in cardiac, neuro, vascular, medical, and orthopedic",
      duration: "(5 years)",
      employer: "UnityPoint Health & Host Healthcare"
    }
  ];

  constructor() { }

  // aynchronous function to return list of contacts using observables
  getJobs(): Observable<any> {
    return of(this.listOfJobs);
  }

  getJob(job: number): Observable<any> {
    let jobDetails: any = null;
    this.listOfJobs.forEach(j => {
      if (j.id === job) {
        jobDetails = j;
      }
    });
    return of(jobDetails);
  }

}
