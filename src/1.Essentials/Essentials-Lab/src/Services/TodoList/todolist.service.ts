import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor() { }
  sum(a: number, b: number): number
  {
    return a + b;
  }

  sumTest(): number
  {
    return 1;
  }
}
