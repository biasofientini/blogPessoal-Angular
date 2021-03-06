import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signup() {
    this.router.navigate(['/cadastrar'])
  }
  
  login() {
    this.router.navigate(['/entrar'])
  }

  more() {
    this.router.navigate(['/mais'])
  }

  about() {
    this.router.navigate(['/sobre'])
  }

}
