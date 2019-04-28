import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlerService {
  autores = [
  {'autor':'Yuuki Masami',
  'quantidade': 0
  },
  {'autor':'Yukimura Makoto',
  'quantidade': 0
  },
  {'autor':'Yudetamago',
  'quantidade': 0
  },
  {'autor':'Toriyama Akira',
  'quantidade': 0
  },
  {'autor':'Takahashi Kazuki',
  'quantidade': 0
  },
  {'autor':'Kubo Taito',
  'quantidade': 0
  }
]
  lista = [];
  listaPublicada = [];
  id = 0;
  
  noticia = null;
  constructor() { }

  
  cadastrarAutor(autor,noticia) {
    let pessoa = {
      'id' : this.id++,
      'autor': autor,
      'noticia': noticia,
      'view':0,
    };
    this.lista.push(pessoa); 
  }
  
  publicaNoticia(pessoa){
    this.listaPublicada.push(pessoa); 
    this.autorMaiorNoticiaPublicada(pessoa);
    this.lista = this.lista.filter(item =>  item.id != pessoa.id);
    
  };
  visualizarNoticia(pessoa){
    for (let p of this.listaPublicada){
      if (p === pessoa){
        pessoa.view++
        this.noticia = pessoa
      }
    }
  };
  autorMaiorNoticiaPublicada(pessoa){
    for (let a of this.autores){
      if (a.autor === pessoa.autor){
        a.quantidade++;
      }
    }
  };
  ranking(){
    return this.listaPublicada.sort((a,b)=>b.view-a.view);
  };
  maiorPublicada(){
    let autorP = null;
    let maiorAutorP = this.autores[0].quantidade;
  
    for (let i = 1; i < this.autores.length; i++) {
      if (maiorAutorP < this.autores[i].quantidade) {
        maiorAutorP = this.autores[i].quantidade;
        autorP = this.autores[i].autor;
      }
    }
    return autorP;
  }
}
