import { BuscadorModule } from './buscador.module';

describe('BuscadorModule', () => {
  let buscadorModule: BuscadorModule;

  beforeEach(() => {
    buscadorModule = new BuscadorModule();
  });

  it('should create an instance', () => {
    expect(buscadorModule).toBeTruthy();
  });
});
