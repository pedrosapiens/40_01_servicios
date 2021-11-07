import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    cif: '',
    localidad: ''
  }

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  addCliente() {
    this.clientesService.setCliente(this.cliente)
  }

}
