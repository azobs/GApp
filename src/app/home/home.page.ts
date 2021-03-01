import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contact = {
    name:"ionic",
    email:"ionic@gmail.com",
    picture:"assets/images/logo.png"
  }
  constructor() {}

}
