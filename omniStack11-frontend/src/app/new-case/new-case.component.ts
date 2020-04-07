import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { NewCase } from './new-case.model';
import { Services } from '../app.service';


@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.css']
})
export class NewCaseComponent implements OnInit {

  formNewCase: FormGroup;

  constructor(private service: Services) { }

  ngOnInit() {
    this.formNewCase = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      value: new FormControl(''),
    });
  }

  newIncidentsByOng() {
    let newCase: NewCase = {
      title: this.formNewCase.controls['title'].value,
      description: this.formNewCase.controls['description'].value,
      value: this.formNewCase.controls['value'].value,
    };

    this.service.newIncidentsByOng(newCase)
      .subscribe(response => {
        console.log(response.id)
      });
  };

}
