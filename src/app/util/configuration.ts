/**
 * @author:
 * @fileoverview:
 * @version:
 */

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class Configuration {

    constructor() {
        this.servidor = environment.ip;
        console.log(this.servidor);
    }

    /**
     * Definicion de direccion IP en la cual se encuentran almacenados los servicios.
     */
    private servidor = environment.ip;

    /**
     * Declaracion de puertos segun cada tipo entidad.
     */
    private puertoCliente = '9180/';
    private puertoEmpleado = '9181/';
    private puertoProducto = '9182/';

    /**
     * URLs de apis establecitas para la consultar, guardar o cambiar estados del cliente.
     */
    private apiUrlConClienteId = 'api/clientes/';
    public apiUrlConClienteIdenti = 'api/clientes/consultar/';

    /**
    * URLs de apis establecitas para la consultar, guardar o cambiar estados del empleado.
    */
    private apiUrlValidarEmpleado = 'empleado/api/empleado/validar';

    /**
    * URLs de apis establecitas para la consultar, guardar o cambiar estados del productos.
    */
    private apiUrlConCatalogo = 'api/producto/catalogo';

    /**
    * Estrctura completa apis Cliente.
    */
    public conClienteIDApiUrl = this.servidor + this.puertoCliente + this.apiUrlConClienteId;
    public consClienteIdentiApiUrl = this.servidor + this.puertoCliente + this.apiUrlConClienteIdenti;

    /**
    * Estrctura completa apis Empleado.
    */
    public validarEmpleadoApiUrl = this.servidor + this.puertoEmpleado + this.apiUrlValidarEmpleado;

    /**
    * Estrctura completa apis Producto.
    */
    public consutarCatalogoApiUrl = this.servidor + this.puertoProducto + this.apiUrlConCatalogo;

    /**oswl
    * Estructura consumo servicio de consulta de tienda.
    */
    public consultarTiendaPorIp = '';
}
