import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this._http.get('https://localhost:5001/api/users').subscribe({
      next: response => {
        this.users = response;
        console.log(this.users)
      },
      error: error => {
        console.log(error);
      }
    });
  }
}

