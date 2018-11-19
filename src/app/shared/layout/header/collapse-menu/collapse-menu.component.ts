import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['/collapse-menu.component.css']
})
export class CollapseMenuComponent implements OnInit {

  private Home: string;
  private consultaCliente: string;
  private estadoNav = 0;
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
    document.getElementById('mySidenav').style.width = '70px';
    document.getElementById('main').style.marginLeft = '0';
  }

  manejoNav() {

    if (this.estadoNav === 0) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      this.Home = ' Home';
      this.consultaCliente = ' Consultar cliente';
      this.estadoNav = 1;
      console.log('Primer if');
    } else if (this.estadoNav !== 0) {
      document.getElementById('mySidenav').style.width = '70px';
      document.getElementById('main').style.marginLeft = '0';
      this.Home = '';
      this.consultaCliente = '';
      this.estadoNav = 0;
      console.log('Segundo if');
    } else {

    }

  }


}
