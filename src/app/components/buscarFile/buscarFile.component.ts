import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buscarFile',
  templateUrl: './buscarFile.component.html',
  styleUrls: ['./buscarFile.component.css']
})
export class BuscarFileComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
