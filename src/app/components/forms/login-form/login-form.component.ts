import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logIn('eve.holt@regres.in', 'cityslicka').subscribe(
      (response) => {
        console.log('Response LogIn', response);
        if (response.token) sessionStorage.setItem('token', response.token);
      },
      (error) =>
        console.error(`There is an error in the login process: ${error}`),
      () => console.info('The Query is completed.')
    );
  }
}
