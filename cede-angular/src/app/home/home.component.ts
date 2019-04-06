import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {


    textString: string = "Andrés Londoño";
    textNumber: number = 27;
    textBoolean: boolean = false;
    textArray: string[] = ["Juan", "Luis", "Andrès"];
    people: Person[];
    constructor(private translate: TranslateService) {
        this.fillPeople();
    }
    fillPeople() {
        this.people = [];
        this.people.push({ Name: 'Andrés', Age: 30 });
        this.people.push({ Name: 'Juan', Age: 30 });
        this.people.push({ Name: 'Andrés', Age: 30 });
        this.people.push({ Name: 'Andrés', Age: 30 });
        this.people.push({ Name: 'Juan', Age: 30 });
        this.people.push({ Name: 'Juan', Age: 30 });
        this.people.push({ Name: 'Andrés', Age: 30 });
    }
    changeValue(event) {
        this.textString = event;
    }
    showAlert() {
        alert(this.textString);
    }

    changeLanguage(lang: string) {
        this.translate.use(lang); 
    }
    showTitle(){
        let params= { name: 'ANDRES'};
        this.translate.get("common.welcome", params).subscribe((message:string) => {
            alert(message);
        });
    }
}

export interface Person {
    Name: string,
    Age?: number
}