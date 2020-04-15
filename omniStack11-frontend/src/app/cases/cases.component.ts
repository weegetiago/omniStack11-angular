import { Component, OnInit, Input } from '@angular/core';
import { Cases } from './cases.module';
import { Services } from '../app.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  /* const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName') */


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
    //alert('Clicado em deleteCases')
  }

}
