import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormularioComponent {
  ruc: string = '';
  valor: number = 0.0;
  gasto: string = 'Ninguno';
  gastos: { ruc: string, valor: number, gasto: string }[] = [];

  constructor() { }

  ngOnInit(): void { }
  
  agregarFactura() {
    const rucRegex = /^\d{1,13}$/;

    if (!rucRegex.test(this.ruc)) {
      alert("Error, ingrese un RUC válido de hasta 13 dígitos");
      return;
    }

    if (isNaN(this.valor) || this.valor <= 0) {
      alert("Error, ingrese un valor numérico válido para el valor de la factura");
      return;
    }

    if (this.gasto === 'Ninguno' || this.gasto==='Escoja el tipo de gasto') {
      alert("Error, seleccione un tipo de gasto");
      return;
    }

    this.gastos.push({
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    });
    console.log('Gastos:', this.gastos);
  }
  
  
 }
