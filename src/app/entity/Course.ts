export class Course {
  title: string;
  description: string;
  startDate: string;
  duration: number;
  isJob: boolean;
  vacancy: number;
  mode: string;
  location: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.startDate = '';
    this.duration = 0;
    this.isJob = false;
    this.vacancy = 0;
    this.mode = '';
    this.location = '';
  }
}
