
import { Injectable} from '@angular/core'; 
import { HttpClient} from '@angular/common/http';
import { UserModel } from './users.model';

@Injectable()
export class  UsersService{
    private baseUrl: string;
    constructor(private http: HttpClient){
            this.baseUrl='https://medicalappointmentapi.azurewebsites.net/api/User';
    }
    
    getAll() {
           return this.http.get(this.baseUrl);
    }
    delete(id:string){
        let requestUrl= this.baseUrl + "/" + id;
        return this.http.delete(requestUrl);
    }
    addUpdate(body:UserModel){
        if(body.userId){
            let requestUrl= this.baseUrl + "/" + body.userId;
            return this.http.put(requestUrl,body);
        }else {
            return this.http.post(this.baseUrl,body);
        }
    }
}