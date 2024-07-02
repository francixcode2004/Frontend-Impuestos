import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Usuario ,UsuarioLogin} from "../../models/usuarios";
import { LoginService } from "../../services/login.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  //usuarios: Usuario[] = [];
  email: string = "";
  password: string = "";

  nombres: string = "";
  apellidos: string = "";
  cedula: string = "";
  telefono: string = "";
  reg_email: string = "";
  reg_password: string = "";
  constructor(private loginService: LoginService) {
    //this.verData();
  }
  ngOnInit(): void {
    //this.verData();
  }
  /*
  verData() {
    this.loginService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      console.log("usuariost", this.usuarios);
    });
  }*/

  register() {
    const newUser: Usuario = {
      nombres: this.nombres,
      apellidos: this.apellidos,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.reg_email,
      password: this.reg_password,
    };

    this.loginService.registerUser(newUser).subscribe(
      (response) => {
        console.log("Usuario registrado:", response);
      },
      (error) => {
        console.error("Error al registrar usuario:", error);
      }
    );
  }

  
  login(): void {
    const loginUser: UsuarioLogin = {
      correo: this.email,
      password: this.password
    };
    console.log(loginUser)
    this.loginService.login(loginUser).subscribe(
      () => {
        console.log('Login successful'); 
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}
