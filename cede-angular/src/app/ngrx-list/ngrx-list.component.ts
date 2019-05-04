import { Component, OnInit } from '@angular/core';
import { Data } from './../ngrx.model';
import { Store } from '@ngrx/store';
import { NgrxState } from '../ngrx.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ngrx-list',
  templateUrl: './ngrx-list.component.html',
  styleUrls: ['./ngrx-list.component.scss']
})
export class NgrxListComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'edad']; 

  dataSource: Observable<Data[]>;


  constructor(private store: Store<NgrxState>) {

    this.dataSource = this.store.select(state => state.ngrx);


  }

  ngOnInit() {


  }

}
