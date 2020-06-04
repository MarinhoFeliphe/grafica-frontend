import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';

@IonicPage()
@Component({
  selector: 'page-pedido-detail',
  templateUrl: 'pedido-detail.html',
})
export class PedidoDetailPage {

  pedido: PedidoDTO = 
  {"cliente": null, "desconto": null, "enderecoDeEntrega": null, "itens": [], "pagamento": null, "status": null}

  constructor(
      public navCtrl: NavController
    , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.pedido = this.navParams.get('pedido');

    console.log(this.pedido);
  }

  total() : number {
    let sum = 0;
    for (let i = 0; i < this.pedido.itens.length; i++) {
        sum += this.pedido.itens[i].produto['preco'] * this.pedido.itens[i].quantidade;
    }
    return sum;
}
}
