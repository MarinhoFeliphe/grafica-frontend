import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { Perfil } from '../models/perfil';
import { StorageService } from '../services/storage.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: string, nivel: Perfil[]}>;

  constructor(public platform: Platform
            , public statusBar: StatusBar
            , public splashScreen: SplashScreen
            , public auth: AuthService
            , public storage : StorageService) {
    this.initializeApp();

    this.pages = [
      { title: 'Profile', component: 'ProfilePage', nivel: [Perfil.CLIENT, Perfil.ADMIN] },
      { title: 'Carrinho', component: 'CartPage', nivel: [Perfil.CLIENT, Perfil.ADMIN] },
      { title: 'Categorias', component: 'CategoriasPage', nivel: [Perfil.CLIENT, Perfil.ADMIN] },
      { title: 'Pedidos', component: 'PedidosPage', nivel: [Perfil.ADMIN] },
      { title: 'Logout', component: '', nivel: [Perfil.CLIENT, Perfil.ADMIN] }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: { title: string, component: string }) {
    
    switch (page.title) {
      case 'Logout':
        this.auth.logout();
        this.nav.setRoot('HomePage');
        break;

      case 'Pedidos':
        if (this.storage.getLocalUser().perfil == Perfil.ADMIN) {
          this.nav.setRoot('PedidosPage');
        } else {
          this.nav.setRoot('PedidosClientePage');
        }
        break;
      default:
        this.nav.setRoot(page.component);
    }

  }
}
