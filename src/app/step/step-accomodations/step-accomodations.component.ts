import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accomodation_status } from '../../models/accomodation-status';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accommodation } from '../../models/accomodation';
import { UserProfileDetails } from '../../models/user-profile-details';
import { AccomodationService } from '../../services/accomodation-service.service';


@Component({
  selector: 'app-step-accomodations',
  templateUrl: './step-accomodations.component.html',
  styleUrls: ['./step-accomodations.component.css']
})
export class StepAccomodationsComponent implements OnInit {



  // accomodation:Array<any>=[]


  
  user: UserProfileDetails;
  accomodations:Accommodation[];
  constructor(private accomodationservice:AccomodationService,private router:Router) { 
     this.accomodationservice.getaccomodation().subscribe(accomodations=>{
      this.accomodations=accomodations;
      console.log(accomodations);
     });
  
  
  }

  
  
  

  ngOnInit(): void {
  
    this.user = JSON.parse(sessionStorage.getItem('userDetails'));

    if(sessionStorage.getItem('userDetails')===null || sessionStorage.getItem('userDetails')===undefined){

      this.router.navigateByUrl('../../she/StepLogin');
    }
  }
  reg=true;
  register(accomodationId:number){
    console.log(accomodationId);
    
    this.accomodationservice.register(accomodationId,this.user.userId).subscribe(a=>{});  
  }

}
