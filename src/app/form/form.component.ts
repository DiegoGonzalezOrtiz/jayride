import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators  } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  error=false;
  travelerForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
    chanel: ['Chanel', Validators.required],
    meetAndGreet: [false, Validators.required],
    date: [null, Validators.required],
    time: [null, Validators.required],
    bookingPrice: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private calendar: NgbCalendar){

  }
  onSubmit(){
    this.error=this.travelerForm.invalid;
    if(this.error){
      console.error('Please Complete all the information.');
    }else {
      console.log(this.travelerForm.value);
    }

  }
}
