import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../../../pais';

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  // styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {

  peru: Pais=new Pais();
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Pais[]>('https://restcountries.eu/rest/v2/name/peru?fullText=true').subscribe(listaperu=>{
      this.peru=listaperu[0];
    })
  }

}
