import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bikes : any;
  currentBike : any;
  messageGet : string = '';
  getColor = '#000000';
  messageDelete : string = '';
  deleteColor = '#000000';

  //when adding the parameter 'bike Service' we are inyecting
  constructor(private bikeService : BikeService) {
    this.bikes = this.bikeService.getBikes();
   }

  ngOnInit(): void {}

  getAllBikes(){
    // it can happen that it wont retrieve the desired data
    // for that we use subscribe
    this.bikes = this.bikeService.getBikes;
  }

  getBike(id : number){
    this.currentBike = [];
    this.currentBike =  this.bikeService.getBike(id);
    
    /* this.bikeService.getBike(id).subscribe(
      data => {this.currentBike = data; 
              this.messageGet =''},
      err => {console.log(err), 
              this.messageGet = "The bike you are looking for doesn't exist.", 
              this.getColor='#ff0000',
              this.currentBike = null},
      () => console.log("Method: getBike() CALLED")
    ); */
  }

  deleteBike(id: number){
    this.bikeService.deleteBike(id).subscribe(
      data => {
        if (data == false){
          this.messageDelete = "The bike you are looking for doesn't exist.";
          this.deleteColor = '#ff0000';
        } else {
          this.messageDelete = "Bike deleted successfully.";
          this.deleteColor = '#008000';
          this.getAllBikes();
        }
      },
      err => {console.log(err)},
      () => console.log("Method: deleteBike() CALLED")
    );
  }
}
