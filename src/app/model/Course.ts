import { Ngo } from './Ngo';

export class Course {
  courseID: number;
  title: string;
  description: string;
  startDate: string;
  durationMonth: number;
  jobOffered: boolean;
  location: string;
  ngoId: number;
  ngo: Ngo;

  constructor() {
    this.courseID = 0;
    this.title = '';
    this.description = '';
    this.startDate = '';
    this.durationMonth = 0;
    this.jobOffered = false;
    this.location = '';
    this.ngoId = 0;
    this.ngo = new Ngo();
  }
}
