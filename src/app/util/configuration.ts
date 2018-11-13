/**
 * @author:
 * @fileoverview:
 * @version:
 */

import { Injectable } from '@angular/core';
import { HomeComponent } from '../component/home/home.component';
import { from } from 'rxjs';

@Injectable()
export class Configuration {

    /**
     * Definicion de direccion IP en la cual se encuentran almacenados los servicios.
     */
    private servidor = 'http://10.23.18.240:';

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
    private apiUrlValidarEmpleado = 'api/empleado/validar';

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

}
