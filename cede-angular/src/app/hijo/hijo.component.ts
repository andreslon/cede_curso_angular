import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() PadreValue:string;
  @Output() HijoEvento = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  onKeyUp(value){
    this.HijoEvento.emit(value);
  }
}
