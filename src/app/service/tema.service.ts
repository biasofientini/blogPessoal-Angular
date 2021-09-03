import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token() {
    return {headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")}
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${URL}/tema`, this.token())
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`${URL}/tema/${id}`, this.token())
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(`${URL}/tema`, tema, this.token())
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(`${URL}/tema`, tema,  this.token())
  }

  deleteTema(id: number){
    return this.http.delete(`${URL}/tema/${id}`, this.token())
  }

}
