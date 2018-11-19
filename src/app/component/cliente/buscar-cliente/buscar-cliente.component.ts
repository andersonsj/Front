import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
