export class Course {
  title: string;
  description: string;
  startDate: string;
  durationMonth: number;
  jobOffered: boolean;
  location: string;
  ngoId: number;

  constructor() {
    this.title = '';
    this.description = '';
    this.startDate = '';
    this.durationMonth = 0;
    this.jobOffered = false;
    this.location = '';
    this.ngoId = 0;
  }
}
