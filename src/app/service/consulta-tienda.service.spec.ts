import { TestBed } from '@angular/core/testing';

import { consultaTiendaService } from './consulta-tienda.service';

describe('BuscarProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: consultaTiendaService = TestBed.get(consultaTiendaService);
    expect(service).toBeTruthy();
  });
});
