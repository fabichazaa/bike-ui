import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo MYB Carbon Fiver Race',
    'Nimbus 2000',
    'Globo Xtrema',
    'Globo Turbo',
    'Globo XSJ43 SuperFlash'
  ];
  bikeForm: FormGroup = new FormGroup({});
  validMessage : string = "";
  successMessage: string = "";
  errorMessage: string = "";


  constructor(private bikeService: BikeService) {}
  
  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      //strings with one space between
      name : new FormControl('', Validators.pattern('^\\b(?!.*?\\s{2})[A-Za-z ]{1,50}\\b$')),
      //characters@characters.domain
      email : new FormControl('', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')),
      //only numbers, must be 10 digits
      phone : new FormControl('', Validators.pattern('[0-9]{10}')),
      //models are brought by the dev, no validation required
      model : new FormControl('', Validators.required),
      //only numbers, between 1 and 12 digits
      serialNumber : new FormControl('',Validators.pattern('[0-9]{1,12}')),
      //only numbers, one or more digits
      purchasePrice: new FormControl('', Validators.pattern('[0-9]{1,}')),
      //dd-mm-yyyy format
      purchaseDate: new FormControl('', Validators.pattern('(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$')),
      contact: new FormControl()
    });
  }

  submitRegistration(): void{
    console.log("You have sent the form.")
    if(this.bikeForm.valid){
      this.errorMessage = '';
      this.validMessage = "All data is valid.";
      this.bikeService.addBike(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          this.successMessage = "Data submitted correctly."
          return true;
        }
      );
    } else {
      this.errorMessage = "Please check all inputs.";
    }
  }
}
