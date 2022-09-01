import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccommodationStatus } from '../model/AccommodationStatus';
import { Hostel } from '../model/Hostel';
import { UserProfileDetails } from '../model/UserProfileDetails';

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  register(
    accommodation: Hostel,
    user: UserProfileDetails
  ): Observable<AccommodationStatus> {
    console.log(accommodation.name, user.firstName);
    return this.httpClient.get<AccommodationStatus>(
      'http://localhost:5001/accommodation/' +
        accommodation.accommodationId +
        '/register/' +
        user.userId
    );
  }

  getaccomodation(): Observable<Hostel[]> {
    return this.httpClient.get<Hostel[]>(
      'http://localhost:5001/accommodation/list-accomodation'
    );
  }

  //accomodationstatus:Accommodation[] =[];
  constructor(private httpClient: HttpClient) {}
}
