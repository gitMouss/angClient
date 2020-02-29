import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  package: any;
  client: any = {
    nom: '',
    prenom: '',
    age: 0
  };
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/clients")
    .subscribe(result => {
      this.package = result;
    }, error => {
      console.log(error);
    });
  }
  saveClient(){
    this.http.post("http://localhost:8080/clients", this.client)
    .subscribe(result => {
      console.log(result);
    });
  }
}
