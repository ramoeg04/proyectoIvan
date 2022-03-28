import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
// import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private userservice: UserService) { }

  ngOnInit(): void {
  }

  // public errors: string = 'Campo Requerido';

  RegisterForm = new FormGroup({
    name: new FormControl('',  [Validators.required]),
    email: new FormControl('',  [Validators.required]),
    password: new FormControl('', [Validators.required]),
  //   nombre: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
    
  })
  register(){
    if (this.RegisterForm.valid) {
      console.log(this.RegisterForm.value, "Valido");
      this.userservice.register(this.RegisterForm.value).subscribe(result => {
        console.log(result, "Valido");
      
        // this._router.navigate(['login']);
       
      }, 
      (error) => {
        console.log(error);
        // window.alert(error.message);
      }
      )
    } else {
      this.RegisterForm.reset()
     
      window.alert("Por Favor, Vuelta a Ingresar");
    }
  }

}
