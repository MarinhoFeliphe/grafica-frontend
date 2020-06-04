import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoService } from '../../services/domain/pedido.service';
import { PedidoDTO } from '../../models/pedido.dto';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  pedidos: PedidoDTO[]

  constructor(
          public navCtrl: NavController
        , public pedidoService: PedidoService
        , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.listarPedidos()
  }
  
  listarPedidos() {
    this.pedidoService
        .findAll()
        .subscribe(response => {
          this.pedidos = response['content'];
        })
  }

  onChange(pedido: PedidoDTO) {
    this.pedidoService
        .changeStatus(pedido.status, pedido['id'])
        .subscribe(res => {})
  }

  listarProdutos(pedido: PedidoDTO) {
    this.navCtrl.push('PedidoDetailPage', { pedido })
  }
}
