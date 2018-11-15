import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  //Create for NestedGroup
  public profileForm;

  constructor(private fb: FormBuilder) {
    //Create using FormBuilder
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      technology: this.fb.array([
        this.fb.control('')
      ])
    });
  }
  //to convert technology to FormArray 
  get technology() {
    return this.profileForm.get('technology') as FormArray;
  }
  addTechnology() {
    this.technology.push(this.fb.control(''));
  }
 
  onSubmit() {
    console.log(this.profileForm.value);
  }
  //create for set all value
  setProfile() {
    this.profileForm.patchValue({
      firstName: 'Ronak',
      lastName: 'Patel',
      address: {
        street: 'Jujwa',
        city: 'Valsad',
        state: 'Gujrat',
        zip: '396001'
      }
    });
    alert('set all value');
  }
  //create for set selected value
  patchProfile(){
    this.profileForm.patchValue({
      firstName: 'Shahbaz',
      lastName:'Shaikh',
      address: {
        street: 'Bilimora'
      }
    });
    alert('set selected value');
  }
  ngOnInit() {
  }

}
