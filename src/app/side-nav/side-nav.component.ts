import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private listTitles!: any[];
  location!: Location;
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
