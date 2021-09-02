import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token() {
    return {headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")}
  }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`${URL}/usuarios/logar`, userLogin)
  }

  signup(user: User): Observable<User>{
    return this.http.post<User>(`${URL}/usuarios/cadastrar`, user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`${URL}/usuarios/${id}`, this.token())
  }


}
