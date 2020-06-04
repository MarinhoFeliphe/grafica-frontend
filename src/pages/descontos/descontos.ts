import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DescontoDTO } from '../../models/desconto.dto';
import { DescontoService } from '../../services/domain/desconto.service';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'descontos',
  templateUrl: 'descontos.html'
})
export class DescontosPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public formBuilder: FormBuilder
    , public descontoService: DescontoService) {

    this.formGroup = this.formBuilder.group({
      percentual: ['', Validators.required],
      quantidadePedidos: ['', Validators.required]
    });

  }

  

  cadastrarDesconto(desconto: DescontoDTO) {
    //this.descontoService.insert(desconto);
    // this.navCtrl.setRoot('ListarDescontoPage');
    this.navCtrl.setRoot('CartPage');
  }

}
