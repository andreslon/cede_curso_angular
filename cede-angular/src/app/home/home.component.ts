import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent{


    textString: string="Andrés Londoño";
    textNumber: number=27;
    textBoolean: boolean=false;
    textArray: string[]=["Juan","Luis", "Andrès"];
    people: Person[];
    constructor(){
        this.fillPeople();
    }
    fillPeople(){
        this.people=[];
        this.people.push({ Name:'Andrés', Age:30 });
        this.people.push({ Name:'Juan', Age:30 });
        this.people.push({ Name:'Andrés', Age:30 });
        this.people.push({ Name:'Andrés', Age:30 });
        this.people.push({ Name:'Juan', Age:30 });
        this.people.push({ Name:'Juan', Age:30 });
        this.people.push({ Name:'Andrés', Age:30 });
    }
    changeValue(event){
        this.textString=event;
    }
    showAlert(){
        alert(this.textString);
    }
}

export interface Person {
    Name: string,
    Age?: number
  }