import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  get controls(){
    return this.personalDetailsForm.controls;
  }

public personalDetailsList: any[]=[];

  constructor(private _formBuilder: FormBuilder,
              private _router: Router
    ){}

  personalDetailsForm = this._formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]]
    
  });

  // creating forms using form group
  // personalDetailsForm = new FormGroup(
  //   {
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     phoneNumber: new FormControl(''),
  //     location: new FormGroup({
  //       address: new FormControl(''),
  //       country: new FormControl(''),
  //       state: new FormControl('')
  //     }) 
  //   }
  // );

  

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.personalDetailsForm)
    this.personalDetailsList.push(this.personalDetailsForm)
    // localStorage.setItem("person",JSON.stringify(this.personalDetailsList))
    console.log(this.personalDetailsList)
  }

  onRouter(){
    this._router.navigateByUrl('/professionalDetails')
    console.log(this.personalDetailsForm)

  }
}
