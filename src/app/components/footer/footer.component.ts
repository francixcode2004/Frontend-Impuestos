import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styles: `
    /* Estilos personalizados para el footer */

.bg-light {
    background-color: #f8f9fa;
}

.py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.text-muted {
    color: #6c757d;
}

.text-decoration-none {
    text-decoration: none;
}

.d-flex {
    display: flex;
}

.flex-column {
    flex-direction: column;
}

.flex-sm-row {
    flex-direction: row;
}

.justify-content-between {
    justify-content: space-between;
}

.align-items-center {
    align-items: center;
}

.gap-4 {
    gap: 1.5rem;
}

.ms-2 {
    margin-left: 0.5rem;
}

/* Ajuste del tamaño de las imágenes */
.icon {
    width: 24px; /* Ajusta el tamaño según sea necesario */
    height: auto;
}

/* Efecto hover para los enlaces */
a.text-muted.text-decoration-none:hover {
    color: #0d6efd;
}

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
