import { Component, OnInit } from '@angular/core';
import { DataInterface } from './models/data.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userData: DataInterface;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  changeInfo(e){
this.userData = e

  }
}
