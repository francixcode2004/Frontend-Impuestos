import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./menu.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  isAuthenticated: boolean = false;

  constructor() {
    // Verificar si hay un token en el localStorage al inicializar el componente
    const token = localStorage.getItem("authToken");
    this.isAuthenticated = !!token; // !!token convierte el valor a booleano
  }

  logout() {
    // Lógica para eliminar el token del localStorage y redirigir a la página de login
    localStorage.removeItem("authToken");
    // Lógica adicional de redirección si es necesario
  }
}
