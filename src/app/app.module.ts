import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { TemaEditComponent } from './tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './tema-delete/tema-delete.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreRodapeComponent } from './sobre-rodape/sobre-rodape.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    HomeComponent,
    SobreComponent,
    InicioComponent,
    NewPostComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    ContatoComponent,
    SobreRodapeComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
