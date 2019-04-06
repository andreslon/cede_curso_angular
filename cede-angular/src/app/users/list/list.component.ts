import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';

import { UserModel } from '../users.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DialogComponent } from './../../shared/dialog/dialog.component'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['userId', 'name', 'lastName', 'nit', 'birthDay', 'email', 'delete'];
  dataSource: MatTableDataSource<UserModel>;
  isLoading: boolean = true;
  constructor(private usersService: UsersService, private dialog: MatDialog, private translate: TranslateService) {

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
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(data);
      },
      (error: any) => {
        this.isLoading = false;
      });
  }

  delete(element) {
    this.isLoading = true;

    this.translate.get("users.confirmMessage").subscribe((message: string) => {
      let dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: element.name,
          message: message
        }
      })
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.usersService.delete(element.userId).subscribe((data: any) => {
            this.isLoading = false;
            this.load();
          });
        } else {
          this.isLoading = false;
        }
      });
    });


  }
}
