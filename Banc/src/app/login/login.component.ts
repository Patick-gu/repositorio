import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Login } from '../models/user';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    ToastrModule

  ]
})
export class LoginComponent implements OnInit {
  login: Login = {
    id: '',
    firstName: '',
    secundName: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  create(){
    this.userService.createUser(this.login).subscribe(() =>{
      this.toast.success('Cliente cadastrado com sucesso', 'login');
      this.router.navigate(['login']);
    }, ex =>{
      console.log(ex)
      if(ex.error.erros){
        ex.error.erros.forEach((erroMsg: string) => {
          this.toast.error(erroMsg);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    }) 
  }
}
