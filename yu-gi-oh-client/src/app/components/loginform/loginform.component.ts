import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {
  constructor(private httpClient: HttpClient) {}
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });
  onSubmit(): void {
    console.log(this.profileForm.value);
    this.httpClient
      .post(
        'http://nest-app-yugiohstore/v1/auth/login',
        this.profileForm.value
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
