import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 
  ngOnInit(): void {
  }
  languages = ['English', 'Hindi', 'Telugu']
  model = new Employee('Dan', 'Smith', true, 'w2')

}
