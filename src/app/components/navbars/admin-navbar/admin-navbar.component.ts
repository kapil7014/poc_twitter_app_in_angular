import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {

  @Input() userData: any;
  constructor() { }

  ngOnInit(): void {
  }
}
