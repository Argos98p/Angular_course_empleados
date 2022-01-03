import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formNewEmpleado:FormGroup;
  constructor() {
    this.formNewEmpleado=new FormGroup({
      nombre:new FormControl('',[Validators.required]),
      apellidos:new FormControl('',[Validators.required]),
      edad:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      departamento:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      imagen:new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formNewEmpleado.value);
    
  }

}
