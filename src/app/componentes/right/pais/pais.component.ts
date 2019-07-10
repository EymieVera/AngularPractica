import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../../../pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
 // styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises: Pais[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Pais[]>('https://restcountries.eu/rest/v2/all').subscribe(retorno => {
      this.paises=retorno
    })
  }

}
