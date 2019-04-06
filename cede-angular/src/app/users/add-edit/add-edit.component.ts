import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { UserModel } from '../users.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  isLoading: boolean;
  id: string;
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  nit = new FormControl('');
  birthDay = new FormControl(new Date());
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private usersService: UsersService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id) {
        this.LoadData();
      }
    });
  }
  LoadData() {
    this.isLoading = true;
    this.usersService.get(this.id).subscribe((data: any) => { 
      if (data) {
        this.name.setValue(data.name);
        this.lastName.setValue(data.lastName);
        this.nit.setValue(data.nit);
        this.birthDay.setValue(data.birthDay);
        this.email.setValue(data.email);
      }
      this.isLoading = false;
    }, (error: any) => {
      this.isLoading = false;
    });
  }
  back() {
    window.history.back();
  }
  clear(){
      this.name.reset(); 
      this.lastName.reset(); 
      this.nit.reset(); 
      this.birthDay.reset(); 
      this.email.reset(); 
  }
  save(form: FormGroup) {

    let body: UserModel = {
      userId: this.id,
      name: this.name.value,
      lastName: this.lastName.value,
      nit: this.nit.value,
      birthDay: this.birthDay.value,
      email: this.email.value,
      genre: 0,
      nitType: 0,
      userStatus: 0,
      nitDate: this.birthDay.value,
    };
    this.usersService.addUpdate(body).subscribe(
      (data: any) => {
        this.back();
      });


  }
}
