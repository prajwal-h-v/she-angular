export class Ngo {
  name: string;
  ngoId: number;
  description: string;
  email: string;
  contact: string;
  verified: boolean;
  address: string;

  constructor() {
    this.name = '';
    this.ngoId = 0;
    this.contact = '';
    this.email = '';
    this.description = '';
    this.address = '';
    this.verified = false;
  }
}
