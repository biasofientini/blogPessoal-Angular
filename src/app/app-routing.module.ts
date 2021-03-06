import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaisComponent } from './mais/mais.component';
import { MenuComponent } from './menu/menu.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreRodapeComponent } from './sobre-rodape/sobre-rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaDeleteComponent } from './tema-delete/tema-delete.component';
import { TemaEditComponent } from './tema-edit/tema-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'tema-edit/:id', component: TemaEditComponent },
  { path: 'tema-delete/:id', component: TemaDeleteComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre-rodape', component: SobreRodapeComponent },
  { path: 'ajuda', component: HelpComponent },
  { path: 'mais', component: MaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
