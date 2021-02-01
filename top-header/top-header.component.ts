import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router:Router) {}

  goToPage(pageName: string):void {
    this.router.navigate([`${pageName}`]);
  }

}
