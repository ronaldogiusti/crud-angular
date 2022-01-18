import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from './../model/course';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>; // mat-table iterates over an array OR an observable

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.courseService.list() // no need to subscribe since mat-table can treat an observable
      .pipe(
        catchError(error => {
          this.onError('Failed to load courses.')
          return of([])
        })

      );
  }

  ngOnInit(): void {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
