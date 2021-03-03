import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"


@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  currentBike : any;
  id : any ;
  constructor(private bikeService : BikeService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getBike(this.route.snapshot.params.id);
  }

  getBike(id : number){
    this.currentBike =  this.bikeService.getBike(id);
    /* this.bikeService.getBike(id).subscribe(
      data => {this.currentBike = data;},
      err => {console.log(err),
              this.currentBike = null,
              this.router.navigate(['/about'])},
      () => console.log("Method: getBike() CALLED")
    );*/
  } 
}
