import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  // professionalDetailsList: any[] = [];

  constructor(private _formBuilder: FormBuilder,
              private _router: Router    
      ) { }

  professionalDetailsForm = this._formBuilder.group(
    {
      details: this._formBuilder.array([])
    }
  )

  ngOnInit(): void {
  }

  get controls(){
    return this.professionalDetailsForm.controls;
  }

  // onSubmit(){
  //   console.log(this.professionalDetailsForm)
  //   this.professionalDetailsList.push(this.professionalDetailsForm)
  //   // localStorage.setItem("person",JSON.stringify(this.personalDetailsList))
  //   console.log(this.professionalDetailsList)
  // }

  get details(){
    return this.professionalDetailsForm.controls['details'] as FormArray;
  }


  onAddProfessionalDetails() {
    const detailsForm = this._formBuilder.group(
      {
        company: ['', [Validators.required, ]],
      designation: ['', [Validators.required, ]],
      startDate: ['', [Validators.required, ]],
        endDate: ['', [Validators.required]],
        skills: ['', [Validators.required]]
      });

      this.details.push(detailsForm);
  }

  onRouter(){
    this._router.navigateByUrl('/attachments')
  }

  onSave(){
    console.log(this.professionalDetailsForm);
  }
}
