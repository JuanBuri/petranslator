import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component:StartComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent}
];
