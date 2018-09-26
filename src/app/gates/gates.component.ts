import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AnimalService } from 'src/app/animal.service';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {
  animals:String[] = [];
  
  constructor(private as:AnimalService) { }

  ngOnInit() {
    this.animals = this.as.getAnimalsForGates();
  }

}
