import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component'
@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  constructor() {}
  public deducibles = [
    'Vivienda',
    'Salud',
    'Educacion',
    'Vestimenta',
    'Alimentacion',
  ];
  public deducibles1 = [
    {
      gastos: 'Vivienda',
      descripcion:
        'Gastos relacionados con el pago de hipoteca, alquiler, y mantenimiento de la vivienda.',
      informacion_adicional:
        'Incluye pagos de servicios públicos como agua, electricidad y gas.',
      imagen: '../../../assets/vivienda.png',
    },
    {
      gastos: 'Salud',
      descripcion:
        'Gastos médicos y de salud, incluyendo seguros médicos, consultas y medicamentos.',
      informacion_adicional:
        'También se incluyen tratamientos dentales y oftalmológicos.',
      imagen: '../../../assets/salud.png',
    },
    {
      gastos: 'Educacion',
      descripcion:
        'Gastos en educación, tales como matrículas escolares y universitarias, y materiales de estudio.',
      informacion_adicional: 'Incluye cursos de formación y capacitaciones.',
      imagen: '../../../assets/educacion.png',
    },
    {
      gastos: 'Vestimenta',
      descripcion: 'Gastos en ropa y accesorios personales.',
      informacion_adicional:
        'Incluye tanto ropa de diario como vestimenta profesional.',
      imagen: '../../../assets/vestimenta.png',
    },
    {
      gastos: 'Alimentacion',
      descripcion: 'Gastos en alimentos y bebidas.',
      informacion_adicional:
        'Incluye compras en supermercados y gastos en restaurantes.',
      imagen: '../../../assets/alimentacion.png',
    },
  ];
  
  selectedInfo: string | null = null;

  public informacion(info: string) {
    this.selectedInfo = info;
    alert(info)
  }

  public borrar(index: number){
    this.deducibles1.splice(index, 1);
  }
 }
