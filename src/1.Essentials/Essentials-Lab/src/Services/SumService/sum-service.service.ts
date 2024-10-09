import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumServiceService {

  constructor() { }
  sumTest(): number
  {
    return 1;
  }
}
