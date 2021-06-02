import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html'
})
export class MyProfileComponent {
  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}


