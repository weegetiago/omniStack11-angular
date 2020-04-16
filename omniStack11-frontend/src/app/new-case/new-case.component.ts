import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { NewCase } from './new-case.model';
import { Services } from '../app.service';


@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.css']
})
export class NewCaseComponent implements OnInit {


  valuePattern = /^[0-9]*$/
  formNewCase: FormGroup

  constructor(
    private service: Services,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formNewCase = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      description: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      value: this.formBuilder.control('', [Validators.required, Validators.pattern(this.valuePattern)]),
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
      });
  };

}
