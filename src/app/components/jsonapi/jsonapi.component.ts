import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { JsonlocalService } from "../../services/jsonlocal.service";
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: "app-jsonapi",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./jsonapi.component.html",
  styles: `
    :host {
      display: block;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonapiComponent implements OnInit {
  selectedApi: string = 'local';
  data: any[] = [];

  constructor(private jsonlocalService: JsonlocalService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadData();
  }

  onApiChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedApi = target.value;
    this.loadData();
    console.log(this.data);
  }

  loadData(): void {
    if (this.selectedApi === 'local') {
      this.jsonlocalService.getJsonLocal().subscribe(data => {
        console.log('Local data:', data);  
        this.data = data;
      });
    } else {
      this.jsonlocalService.getJsonOnline().subscribe(data => {
        console.log('Online data:', data);  
        this.data = data;
      });
    }
  }
}
