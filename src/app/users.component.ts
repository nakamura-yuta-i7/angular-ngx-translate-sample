import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  template: `
    <div>
      users works!
    </div>
    <div>{{ 'HELLO' | translate }}</div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
