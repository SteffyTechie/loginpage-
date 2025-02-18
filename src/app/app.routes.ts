import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'user-login',component:LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'edit', component: EditComponent}
];
