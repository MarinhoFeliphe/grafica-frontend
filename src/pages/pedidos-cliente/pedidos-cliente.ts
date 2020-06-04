import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoService } from '../../services/domain/pedido.service';
import { StorageService } from '../../services/storage.service';
import { PedidoDTO } from '../../models/pedido.dto';

@IonicPage()
@Component({
  selector: 'page-pedidos-cliente',
  templateUrl: 'pedidos-cliente.html',
})
export class PedidosClientePage {

  pedidos: PedidoDTO[] = []

  constructor(
        public navCtrl: NavController
      , public storage : StorageService
      , public pedidoService: PedidoService
      , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.listarPedidosCliente()
  }

  listarPedidosCliente() {
    this.pedidoService
        .findByClient(this.storage.getLocalUser().id)
        .subscribe(res =>  {
          this.pedidos = res;
        })
  }

  listarProdutos(pedido: PedidoDTO) {
    this.navCtrl.push('PedidoDetailPage', { pedido })
  }
}
