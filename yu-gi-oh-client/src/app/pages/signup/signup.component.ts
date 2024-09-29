import { Component } from '@angular/core';
import { SignupformComponent } from '../../components/signupform/signupform.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupformComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
