import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {agregarImpuesto} from '../../../assets/data/dataImpuestos'
import {Impuesto} from '../../models/impuesto'
import{ImpuestoService} from '../../services/impuesto.service'

@Component({
  selector: 'app-impuesto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './impuesto.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpuestoComponent { 
  cedula: string = '';
  sueldoAnual: number = 0;
  salud: number = 0;
  educacion: number = 0;
  vestimenta: number = 0;
  vivienda: number = 0;
  alimentacion: number = 0;
  impuesto: number | null = null;
  deduccionMaxima: number = 15238.60;
  totalDeducciones: number = 0;
  baseImponible: number = 0;
  excedente: number = 0;
  impuestoRenta: number | null = 0;

  constructor(private impuestoService: ImpuestoService) {
   }

  ngOnInit(): void { }

  validacion(): boolean {
    const cedulaRegex = /^\d{10}$/;
    if (!cedulaRegex.test(this.cedula)) {
      alert("Error, ingrese un número de cédula válido de 10 dígitos");
      return false;
    }

    if (isNaN(this.sueldoAnual) || this.sueldoAnual <= 0 ) {
      alert("Error, ingrese un sueldo anual válido");
      return false;
    }

    if (isNaN(this.salud) || this.salud < 0  || this.salud>this.deduccionMaxima) {
      alert("Error, ingrese un valor válido para gastos en salud");
      return false;
    }

    if (isNaN(this.educacion) || this.educacion < 0  || this.educacion>3500) {
      alert("Error, ingrese un valor válido para gastos en educación");
      return false;
    }

    if (isNaN(this.vestimenta) || this.vestimenta < 0  || this.vestimenta>3500) {
      alert("Error, ingrese un valor válido para gastos en vestimenta");
      return false;
    }

    if (isNaN(this.vivienda) || this.vivienda < 0  || this.vivienda>3500 ) {
      alert("Error, ingrese un valor válido para gastos en vivienda");
      return false;
    }

    if (isNaN(this.alimentacion) || this.alimentacion < 0  || this.alimentacion>3500) {
      alert("Error, ingrese un valor válido para gastos en alimentación ");
      return false;
    }

    return true;
  }

  calcularBaseImponible(): void {
    if (this.validacion()) {
      this.totalDeducciones = this.salud + this.educacion + this.vestimenta + this.vivienda + this.alimentacion;
      if (this.totalDeducciones > this.deduccionMaxima) {
        alert ("el valor maximo de deduciones a sido sobrepasado 15238.60")
        return 
      }
      this.baseImponible = this.sueldoAnual - this.totalDeducciones;
      console.log("total deduciones",this.totalDeducciones)
      console.log("Base Imponible:", this.baseImponible);
    }
  }

  calcularImpuestoRenta(): void {
    this.calcularBaseImponible();
    
    const tablaImpuesto = [
      { base: 0, exceso: 11722, impuestoBasico: 0, porcentajeExcedente: 0 },
      { base: 11722, exceso: 14930, impuestoBasico: 0, porcentajeExcedente: 0.05 },
      { base: 14930, exceso: 19385, impuestoBasico: 160, porcentajeExcedente: 0.10 },
      { base: 19385, exceso: 25638, impuestoBasico: 606, porcentajeExcedente: 0.12 },
      { base: 25638, exceso: 33738, impuestoBasico: 1356, porcentajeExcedente: 0.15 },
      { base: 33738, exceso: 44721, impuestoBasico: 2571, porcentajeExcedente: 0.20 },
      { base: 44721, exceso: 59537, impuestoBasico: 4768, porcentajeExcedente: 0.25 },
      { base: 59537, exceso: 79388, impuestoBasico: 8472, porcentajeExcedente: 0.30 },
      { base: 79388, exceso: 105580, impuestoBasico: 14427, porcentajeExcedente: 0.35 },
      { base: 105580, exceso: Infinity, impuestoBasico: 23594, porcentajeExcedente: 0.37 }
    ];

    for (const rango of tablaImpuesto) {
      if (this.baseImponible > rango.base && this.baseImponible <= rango.exceso) {
        this.excedente = this.baseImponible - rango.base;
        this.impuestoRenta = rango.impuestoBasico + (this.excedente * rango.porcentajeExcedente);
        break;
      }
    }

    console.log("Impuesto a la renta:", this.impuestoRenta);
    
  }

  guardarResultadosEnJSON(): void {
    if (this.impuestoRenta !== null) {
      const nuevoImpuesto: Impuesto = {
        id: Date.now(),
        cedula: this.cedula,
        ingresoAnual: this.sueldoAnual,
        totalGastos: this.totalDeducciones,
        impuestoCalculado: this.impuestoRenta,
      };
      this.impuestoService.guardarImpuestoEnArchivo(nuevoImpuesto)
        .subscribe(() => {
          console.log('Datos guardados en el archivo.');
        });
    }
  }
}

