import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
//import { AnimalsService } from 'src/app/AnimalsService';
import { AnimalService } from 'src/app/animal.service';
declare var app: any;



@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css'],
})
export class GatesComponent implements OnInit {
  animals:String[] = [];
  usrname = 'unknown';
  
  constructor(private as: AnimalService) { }

  ngOnInit() {
    //private as:AnimalService
    this.animals = this.as.getAnimalsForGates();
    this.usrname = app.user.email;
  }

}
