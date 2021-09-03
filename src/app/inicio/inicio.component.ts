import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: User = new User()
  postagem: Postagem = new Postagem()
  listaPostagens?: Postagem[]
  listaTemas?: Tema[]
  idTema!: number
  tema: Tema = new Tema()

  constructor(
    private router: Router,
    private authService: AuthService,
    private temaService: TemaService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    this.getUserProfile()
    this.getAllPostagens()
  }

  getUserProfile() {
    this.authService.getByIdUser(Number(localStorage.getItem("id") || "")).subscribe((resp: User) => {
      this.user.nome = resp.nome
      this.user.foto = resp.foto
      this.user.postagem = resp.postagem
      this.user.senha = ''
      this.user.tipo = resp.tipo
      this.user.usuario = resp.usuario
    })
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(Number(localStorage.getItem("id") || "")).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.user.id = Number(localStorage.getItem("id") || "")
    this.postagem.usuario = this.user
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('SUCESSO')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
