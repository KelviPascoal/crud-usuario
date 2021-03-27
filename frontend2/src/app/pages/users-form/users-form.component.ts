import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './User';



@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  name: string;
  email: string;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if (id) {
      this.getUserForEdit(id)
    }


  }

  async save() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")

    const user: User = {
      name: this.name,
      email: this.email
    }

    if (id) {
      await this.http.put('http://localhost:5555/users/' + id, user).toPromise()
      this.goToList();
      return;
    }


    await this.http.post('http://localhost:5555/users', user).toPromise()
    this.goToList()
  }

  goToList() {
    this.router.navigateByUrl('usuarios')
  }

  async getUserForEdit(id: string) {
    const user: any = await this.http.get('http://localhost:5555/users/' + id).toPromise()
    this.name = user.name;
    this.email = user.email;

  }

}
