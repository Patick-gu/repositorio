import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EntradasComponent } from './entradas/entradas.component';
import path from 'node:path';
import { AuthGuard } from './auth/auth.component';
import { SaidasComponent } from './saidas/saidas.component';

export const routes: Routes = [
    {
    path:'login',
    component: LoginComponent
    },
    {
      path:'',
      component: SidebarComponent, 
      children:[
        {path:'entrada',component: EntradasComponent},
        {path:'saidas', component: SaidasComponent},
    ]
    },
     
    
    //{
    //path: '', component: SidebarComponent, canActivate: [AuthGuard], children: [
     //
      
    //]
 // }
    
    
    

];
