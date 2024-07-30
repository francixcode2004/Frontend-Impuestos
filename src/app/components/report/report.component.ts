import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Impuesto } from "../../models/impuesto";
import { ImpuestoService } from "../../services/impuesto.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-report",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./report.component.html",
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit {
  cedula: string = "";
  impuestos: Impuesto[] = [];
  constructor(private impuestosServices: ImpuestoService) {}
  ngOnInit(): void {
    this.verImpuestos();
  }
  verImpuestos() {
    console.log("la cedula es",this.cedula)
    this.impuestosServices.getImpuestos(this.cedula).subscribe((data) => {
      this.impuestos = data;
      console.log("impuestos", this.impuestos);
    });
  }
}