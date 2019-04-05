import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {
    transform(value: any): string { 
        let message = "Welcome " + value;
        return message;
    }
}