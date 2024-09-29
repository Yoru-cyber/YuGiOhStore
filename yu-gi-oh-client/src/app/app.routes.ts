import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { YuGiOhCardsComponent } from './pages/yu-gi-oh-cards/yu-gi-oh-cards.component';
import { CardDetailsComponent } from './pages/yu-gi-oh-cards/card-details/card-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'YuGiOh/cards', component: YuGiOhCardsComponent },
  { path: 'YuGiOh/cards/:id', component: CardDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
