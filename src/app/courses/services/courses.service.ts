import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API_URL = 'api/courses/';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API_URL)
      .pipe(
        first(), // take the first response and finishes the connection properly
        delay(500),
        tap(c => console.log('courses: ', c))
      );
  }
}
