import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  id: string;
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  nit = new FormControl('');
  birthDay = new FormControl(new Date());
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
  back() {
    window.history.back();
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
