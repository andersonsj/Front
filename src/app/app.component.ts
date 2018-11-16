import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'FrontAsesoria';

  ambiente: string;

  constructor() {
    this.ambiente = environment.ambiente;
  }


}
