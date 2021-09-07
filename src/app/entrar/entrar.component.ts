import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/home'])
  }

  login() {
    this.authService.login(this.userLogin).subscribe((resp: UserLogin) => {
      localStorage.setItem("token", resp.token)
      localStorage.setItem("id", resp.id.toString())
      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500){
        alert('ERRO')
      }
    }
    )
  }
}
