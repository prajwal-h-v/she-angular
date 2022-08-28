import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accomodation_status } from '../../models/accomodation-status';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Accommodation } from '../../models/accomodation';
// import { UserProfileDetails } from 'src/app/user-profile-details';
import { AccomodationService } from '../../services/accomodation-service.service';


@Component({
  selector: 'app-step-accomodations',
  templateUrl: './step-accomodations.component.html',
  styleUrls: ['./step-accomodations.component.css']
})
export class StepAccomodationsComponent implements OnInit {

//   accomodations =[
//     {
//      name:"Sakhi",
//      address1:"lokamanya apartment",
//      address2:"wakil society",
//      landmark:"JJ hospital",
//      city:"Pune",
//      state:"Maharashtra",
//      pincode:411057,
//      rooms:20,
//      daycare:"Available"   

//    },
//    {
//     name:"Sakhieee",
//     address1:"lokamanya apartment",
//     address2:"wakil society",
//     landmark:"JJ hospital",
//     city:"Punewwww",
//     state:"Maharashtra",
//     pincode:411057,
//     rooms:10,
//     daycare:"Available"   

//   }
//  ];  


  // accomodation:Array<any>=[]


  reg=true;

  register(){
    this.reg=false;
  }
  // user: UserProfileDetails;
  accomodations:Accommodation[];
  constructor(private accomodationservice:AccomodationService,private router:Router) { 
     this.accomodationservice.getaccomodation().subscribe(accomodations=>{
      this.accomodations=accomodations;
      console.log(accomodations);
     });
  
  
  }

  ngOnInit(): void {
  }

}
