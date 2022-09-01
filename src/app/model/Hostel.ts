import { Ngo } from './Ngo';

export class Hostel {
  accommodationId: number;
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
  ngo: Ngo;
  constructor() {
    this.accommodationId = 0;
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
    this.ngo = new Ngo();
  }
}
