import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../articulo-familia';
import { MockArticulosFamiliasService } from '../mock-articulos-familias.service';
import { ArticulosFamiliasService } from '../articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})
export class ArticulosFamiliasComponent implements OnInit {

  Titulo = "Articulos Familias";
  Items: ArticuloFamilia[] = [];

  constructor(
    //private articulosFamiliasService:  MockArticulosFamiliasService
    private articulosFamiliasService:  ArticulosFamiliasService

  ){
    
  }


  ngOnInit() {
     this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get()
    .subscribe((res:ArticuloFamilia[]) => {
      this.Items = res;
    });
  }

}