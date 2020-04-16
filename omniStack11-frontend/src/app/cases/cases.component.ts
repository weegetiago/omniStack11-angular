import { Component, OnInit, Input } from '@angular/core';
import { Cases } from './cases.module';
import { Services } from '../app.service';

const ongName = localStorage.getItem('ongName');

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  ongName = ongName;

  @Input() casosOng: Cases[] = [];

  constructor(private service: Services) { }

  ngOnInit(): void {
    this.service.incidentsByOng()
      .subscribe(response => {
        this.casosOng = response;
      });

  }

  deleteCases(id: string) {
    this.service.deleteCases(id)
      .subscribe(() => {
        this.service.incidentsByOng()
          .subscribe(response => {
            this.casosOng = response;
          });
      });
  }

  fazerLogout() {
    localStorage.clear();
  }
}
