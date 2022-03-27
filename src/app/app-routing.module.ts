import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/elementor/header/header.component';
import { PricingComponent } from './components/elementor/pricing/pricing.component';
import { LoginComponent } from './components/user/login/login.component';
import { OlvpsswComponent } from './components/user/olvpssw/olvpssw.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  
    { path :'', component: HeaderComponent },
    { path: 'login' , component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'olvpssw', component: OlvpsswComponent },
    { path: 'pricing', component: PricingComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
