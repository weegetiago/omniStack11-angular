import { Component, OnInit } from '@angular/core';
import { Services } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logon } from './logon.model';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  formLogon: FormGroup

  constructor(
    private service: Services,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogon = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required, Validators.minLength(8)])
    })
  }

  logon() {
    let logon: Logon = {
      id: this.formLogon.controls['id'].value
    };
    this.service.logon(logon)
      .subscribe(response => {
        localStorage.setItem('ongId', this.formLogon.value.id)
        localStorage.setItem('ongName', response.name)
      })
  }
}
