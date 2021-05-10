import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VisorService } from 'src/app/core/services/visor.service';

@Component({
  selector: 'app-buscarFile',
  templateUrl: './buscarFile.component.html',
  styleUrls: ['./buscarFile.component.css']
})
export class BuscarFileComponent implements OnInit {

  myForm: FormGroup;
  public vsubmit=true;

  constructor(
    private fb: FormBuilder,
    private visorService:VisorService
  ) { 
    this.myForm =  fb.group({

      tDocumento: ['RUC', ],
      numero: ['', ],
      razonsocial: ['', ],
      documento: ['', ]


    });
    
    
  }

  ngOnInit() {
    this.vsubmit = (this.numero.value=='')
  }

  onSubmit() {
    console.log('this.myForm.value: ', this.myForm.value);
    this.visorService.findjuridica( this.myForm.value ).subscribe(
      rpta=> {
        console.log(rpta);
      }
    );
   
  }

  myonBlurNumero(){


    

    if(this.myForm.value.numero!=''){

      this.numero.setValidators([Validators.required, Validators.minLength(3),Validators.maxLength(3)]);
    }if(this.myForm.value.numero==''){
      this.numero.clearValidators();
    }
    this.vsubmit = this.numero.valid;


    this.numero.updateValueAndValidity()
  }

  myonBlurRazonSocial(){

    if(this.myForm.value.razonsocial!=''){

      this.razonsocial.setValidators([Validators.required, Validators.minLength(8)]);
    }if(this.myForm.value.razonsocial==''){
      this.razonsocial.clearValidators();
    }
    this.vsubmit = this.razonsocial.valid;
    this.razonsocial.updateValueAndValidity()
  }

  myonBlurDocumento(){

    if(this.myForm.value.documento!=''){

      this.documento.setValidators([Validators.required, Validators.minLength(5)]);
    }if(this.myForm.value.documento==''){
      this.documento.clearValidators();
    }
    this.vsubmit = this.documento.valid;
    
    this.documento.updateValueAndValidity()
  }



 
  get numero() { return this.myForm.get('numero') as FormControl; }
  get razonsocial() { return this.myForm.get('razonsocial') as FormControl; }
  get documento() { return this.myForm.get('documento') as FormControl; }

  numericOnly(event): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

}
