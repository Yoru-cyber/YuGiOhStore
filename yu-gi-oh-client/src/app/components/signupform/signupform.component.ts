import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css',
})
export class SignupformComponent {
  constructor(private httpClient: HttpClient){}
  //more validation needed for password
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });
  //maybe a refactor to a service?
  onSubmit(): void {

    this.httpClient.post(
      'http://nest-app-yugiohstore/v1/users/signup',
      this.profileForm.value
    ).subscribe((response: any) =>{
      console.log(response);
    });
  }
}
