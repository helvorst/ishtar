import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAnimalsForGates(): String[] {
    return ['sirrush', 'lion'];
  }
}
