import { Services } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  whatsappPattern = /^[0-9]*$/
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  formRegister: FormGroup

  constructor(
    private service: Services,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      whatsapp: this.formBuilder.control('', [Validators.required, Validators.pattern(this.whatsappPattern)]),
      city: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      uf: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
    })
  }

  newRegister(){
    let register: Register = {
      name: this.formRegister.controls['name'].value,
      email: this.formRegister.controls['email'].value,
      whatsapp: this.formRegister.controls['whatsapp'].value,
      city: this.formRegister.controls['city'].value,
      uf: this.formRegister.controls['uf'].value,
    };
    this.service.newRegister(register)
    .subscribe(response => {
      alert(`Seu ID de acesso é: ${response.id}`)
    })
  };
}
