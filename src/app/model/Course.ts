export class Course {
  title: string;
  description: string;
  startDate: string;
  durationMonth: number;
  isJob: string;
  location: string;
  ngoId: number;

  constructor() {
    this.title = '';
    this.description = '';
    this.startDate = '';
    this.durationMonth = 0;
    this.isJob = '';
    this.location = '';
    this.ngoId = 0;
  }
}
