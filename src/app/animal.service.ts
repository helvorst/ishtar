import { Injectable } from '@angular/core';

@Injectable()
export class AnimalService {

  constructor() { }

  getAnimalsForGates() {
    return ['lion', 'sirrush'];
  }
}
