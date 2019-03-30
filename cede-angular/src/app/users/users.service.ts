
import { Injectable} from '@angular/core'; 
import { HttpClient} from '@angular/common/http';

@Injectable()
export class  UsersService{
    private baseUrl: string;
    constructor(private http: HttpClient){
            this.baseUrl='https://medicalappointmentapi.azurewebsites.net/api/User';
    }
    
    getAll() {
           return this.http.get(this.baseUrl);
    }
}