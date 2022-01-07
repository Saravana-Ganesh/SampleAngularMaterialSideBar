import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-left-nav',
  templateUrl: './side-left-nav.component.html',
  styleUrls: ['./side-left-nav.component.scss']
})
export class SideLeftNavComponent implements OnInit {
  menuItems!: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ['Chennai','Mumbai'];
  }

}
