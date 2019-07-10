import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { RightComponent } from './componentes/right/right.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PaisComponent } from './componentes/right/pais/pais.component';
import { PostComponent } from './componentes/right/post/post.component';
import { PeruComponent } from './componentes/right/peru/peru.component';
import { TemplateComponent } from './componentes/template/template.component';
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
    PeruComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
