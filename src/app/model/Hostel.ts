export class Hostel {
  name: string;
  addressLane1: string;
  addressLane2: string;
  city: string;
  state: string;
  pinCode: string;
  totalRooms: number;
  roomAvailable: number;
  capacity: number;
  dayCareCenter: boolean;
  ngoId: number;

  constructor() {
    this.name = '';
    this.addressLane1 = '';
    this.addressLane2 = '';
    this.roomAvailable = 0;
    this.city = '';
    this.dayCareCenter = false;
    this.state = '';
    this.pinCode = '';
    this.totalRooms = 0;
    this.capacity = 0;
    this.ngoId = 0;
  }
}
