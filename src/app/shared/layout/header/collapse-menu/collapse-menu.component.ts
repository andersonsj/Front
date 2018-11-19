import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['/collapse-menu.component.css']
})
export class CollapseMenuComponent implements OnInit {

  private Home: string;
  private consultaCliente: string;
  constructor() {

  }

  ngOnInit() {
  }



  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    this.Home = ' Home';
    this.consultaCliente = ' Consultar cliente';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '60px';
    document.getElementById('main').style.marginLeft = '0';
  }

  manejoNav() {

    if (document.getElementById('mySidenav').style.width = '60px') {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      this.Home = ' Home';
      this.consultaCliente = ' Consultar cliente';
      console.log('Primer if');
    } else if (document.getElementById('mySidenav').style.width = '250px') {
      document.getElementById('mySidenav').style.width = '60px';
      document.getElementById('main').style.marginLeft = '0';
      this.Home = '';
      this.consultaCliente = '';
      console.log('Segundo if');
    } else {

    }

  }


}
