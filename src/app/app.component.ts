import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'FrontAsesoria';

  ambiente: string;

  constructor() {
    this.ambiente = environment.ambiente;
  }


}
