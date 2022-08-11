import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Ferran';
  age = 25;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Ferran',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
}
