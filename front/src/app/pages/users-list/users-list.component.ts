import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  users: any = [];

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers() {
    this.users = await this.http.get('http://localhost:5555/users').toPromise();
    console.log(this.users + " LLLLLLLLLLLLLLLLLLLLL");
  }

  goToForm() {
    this.router.navigateByUrl('usuarios/cadastro')
  }

  async delete(id: string) {
    await this.http.delete('http://localhost:5555/users/' + id).toPromise();
    this.getUsers()
  }

  edit(id: string) {
    this.router.navigateByUrl('usuarios/editar/' + id)
  }

}
