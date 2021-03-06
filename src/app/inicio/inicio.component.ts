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
  fotoValida: boolean = false
  tituloPost!: string
  nomeTema!: string
  key = 'data'
  reverse = true

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

  newPost() {
    this.router.navigate(['/new-post'])
  }

  valid() {
    this.fotoValida = true
  }
  
  logout() {
    localStorage.clear()
    this.router.navigate(['/home'])
  }

  findByTituloPostagem() {
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else{
      this.postagemService.getByTitutlo(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema(){
    if(this.nomeTema == ''){
      this.getAllTemas()
    } else{
      this.temaService.getByNome(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }

}
