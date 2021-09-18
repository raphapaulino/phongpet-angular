import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals : any[] = [];

  constructor(private http: HttpClient) {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
      this.http.get<Array<any>>('http://localhost:8080/animals', {
        //...headers
      }).subscribe(response => {
        console.log(response)
        this.animals = response;
      })
  }

}
