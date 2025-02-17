import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from '../../generic.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(private fb: FormBuilder,private route:Router,private gs:GenericService) {
  this.loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
}

onSubmit(){
  if (this.loginForm.valid) {
    this.gs.post('https://localhost:44305/api/auth/login',this.loginForm?.value).subscribe((res:any)=> {
      localStorage.setItem('authToken',res?.value)
      this.route.navigate(['/tasks']); 
    })
  } else {
    console.log('Form is not valid');
  }
}
}
