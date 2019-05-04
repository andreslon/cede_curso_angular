import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgrxState } from '../ngrx.state';
import { Data } from '../ngrx.model';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
 
  nombre = new FormControl('', [Validators.required]);
  edad = new FormControl('', [Validators.required]);
  constructor(private store: Store<NgrxState>) { }

  ngOnInit() {
     

  }  
  add(){
    debugger;
    this.store.dispatch({
      type: "ADD_DATA",
      payload : <Data> {
        nombre: this.nombre.value,
        edad: this.edad.value,
      }
    });

    this.nombre.reset();
    this.edad.reset();

  }

}
