import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(private fb: FormBuilder,private route:Router) {
  this.loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
}

onSubmit(){
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    this.route.navigate(['/tasks']); 
  } else {
    console.log('Form is not valid');
  }
}
}
