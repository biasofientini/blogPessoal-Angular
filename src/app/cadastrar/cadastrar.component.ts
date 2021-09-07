import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User()
  confirmarSenha!: string
  tipoUsuario: string = 'normal'

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }
  
  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/home'])
  }

  signup() {
    this.user.tipo = this.tipoUsuario
    if(this.user.senha != this.confirmarSenha){
      alert("SENHAS INCORRETAS")
    } else{
      this.authService.signup(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('SUCESSO')
      })
    }
  }

}
