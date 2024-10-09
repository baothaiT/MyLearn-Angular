import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
    console.log('constructor');
    this.signupForm = this.fb.group({
      email: [''],
      password: ['' ]
    });
  }

  ngOnInit() 
  {
    console.log('ngOnInit');
    

  }
  onSubmit()
  {
    console.log('onSubmit');
  }
}
