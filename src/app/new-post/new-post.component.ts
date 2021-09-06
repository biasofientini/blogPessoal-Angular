import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  user: User = new User()
  postagem: Postagem = new Postagem()
  listaPostagens?: Postagem[]
  listaTemas?: Tema[]
  idTema!: number 
  tema: Tema = new Tema()

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    this.getAllTemas()
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
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
      this.router.navigate(['/inicio'])
    })
  }

  create() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('SUCESSO')
      this.getAllTemas()
      this.tema = new Tema()
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  cancel() {
    this.router.navigate(['/inicio'])
  }

}
