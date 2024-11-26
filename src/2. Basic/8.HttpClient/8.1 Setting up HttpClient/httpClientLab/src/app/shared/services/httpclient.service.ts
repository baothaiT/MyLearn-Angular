import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInterface } from './../interfaces/log-interface';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

constructor(private http: HttpClient) { }

  getLogs(): Observable<LogInterface[]> {
    return this.http.get<LogInterface[]>('http://localhost:5191/log').pipe(
      map((logs) => logs || []),
      catchError((error) => {
        console.error('Error fetching logs:', error);
        throw error;
      })
    );
  }
  
  createLogs(log: LogInterface): Observable<LogInterface> {
    return this.http.post<LogInterface>('http://localhost:5191/log', log).pipe(
      map((createdLog) => createdLog),
      catchError((error) => {
        console.error('Error creating log:', error);
        throw error;
      })
    );
  }
}
