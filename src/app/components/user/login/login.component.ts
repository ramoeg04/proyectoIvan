import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private userService: UserService,) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(result => {
        console.log(this.loginForm.value, "Valido");
        // this.userService.setToken(result.token);
        // this.homeService.setId(this.loginForm.value.email);
        this._router.navigate(['']);
        // window.alert("Bienvenido");
      }, (error) => {
        console.log(error);
        this.loginForm.reset();
        window.alert(error.message);
      })
    } else {
      this.loginForm.reset()
      // console.log("No Valido");
      window.alert("Por Favor, Vuelta a Ingresar");
    }
  }
}
