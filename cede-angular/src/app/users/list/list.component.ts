import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';

import { UserModel } from '../users.model';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['userId', 'name', 'lastName', 'nit', 'birthDay', 'email'];
  dataSource: MatTableDataSource<UserModel>;

  constructor(private usersService: UsersService) {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {
  }

  load() {
    this.usersService.getAll().subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error: any) => {

      });
  }
}
