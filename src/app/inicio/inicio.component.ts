import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: User = new User()

  constructor(
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.getUserProfile()
  }

  getUserProfile() {
    this.authService.getByIdUser(Number(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      this.user.nome = resp.nome
      this.user.foto = resp.foto
      this.user.postagem = resp.postagem
      this.user.senha = ''
      this.user.tipo = resp.tipo
      this.user.usuario = resp.usuario
    })
  }

}
