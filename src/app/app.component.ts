import { Component } from '@angular/core';
import { ControlerService } from './controler.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = 'inicial';
  autor = null;
  noticia = null;
  
  
  constructor(private service: ControlerService) {

  }
  salvarPublicacao() {
    this.tela = 'publica';
    this.service.cadastrarAutor(this.autor,this.noticia);
    this.autor = null;
    this.noticia = null;
  }
  mudarTela(nome){
    this.tela = nome;
  }
  visualizar(pessoa){
    this.tela = 'noticia';
    this.service.visualizarNoticia(pessoa);
  }
}
