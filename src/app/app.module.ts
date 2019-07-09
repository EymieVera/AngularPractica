import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { RightComponent } from './componentes/right/right.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaisComponent } from './componentes/right/pais/pais.component';
import { PostComponent } from './componentes/right/post/post.component';
import { PeruComponent } from './componentes/right/peru/peru.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DatosComponent,
    RightComponent,
    FooterComponent,
    PostComponent,
    PaisComponent,
    PeruComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
