import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {
  //Create for FormControl
  public name:FormControl;

  //Create for FormGroup
  public profileForm:FormGroup;

  constructor() {

    //Create using FormControl Instance
    this.name = new FormControl('');

    //Create using FormGroup Instance
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });


  }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Ronak');
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }

}
