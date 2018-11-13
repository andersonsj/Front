import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/Util/configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Configuration]
})
export class HomeComponent implements OnInit {

  constructor(public configuration: Configuration) { }


  ngOnInit() {

  }

  consultar() {
    console.log(this.configuration.consutarCatalogoApiUrl);
    console.log(this.configuration.consClienteIdentiApiUrl);
  }

}
