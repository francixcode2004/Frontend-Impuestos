import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit { 
  usuarios:Usuario[]=[];
  constructor(private loginService:LoginService) {
    this.login();
    this.verData();
    this.ngOnInit();
   }
  ngOnInit(): void {
    this.verData();
  }
  verData(){
    this.loginService.getUsuarios().subscribe(data=>{
      this.usuarios=data;
      console.log(data);
    })
  }
  login(){
    console.log("hola mundo");
  }
}
