import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [''],
      senha: ['']
    });
  }

  login() {
    const login = this.loginForm.get('login')?.value;
    const senha = this.loginForm.get('senha')?.value;
    this.authService.authenticate(login, senha).subscribe(() => 
      this.router.navigateByUrl('/consulta'),
      err => {
        console.log(err);
        this.loginForm.reset();
      }
    );
  }
}