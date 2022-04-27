import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   
  }

  depoiments = [
    {
      name: 'Encapsulamento',
      description:
        'Na programação orientada a objetos, o encapsulamento se refere ao agrupamento de dados com os métodos que operam nesses dados ou à restrição do acesso direto a alguns dos componentes de um objeto.',
    },
    {
      name: 'Herança',
      description:
        'Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos, através de "heranças". Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos.',
    },
    {
      name: 'Polimorfismo',
      description: 'Na programação orientada a objetos, o polimorfismo permite que referências de tipos de classes mais abstratas representem o comportamento das classes concretas que referenciam. Assim, é possível tratar vários tipos de maneira homogênea. O termo polimorfismo é originário do grego e significa "muitas formas". ',
    },
    {
      name: 'Abstração',
      description: 'O conceito de abstração consiste em esconder os detalhes de algo, no caso, os detalhes desnecessários. No mundo real, utilizamos abstrações o tempo todo. Tudo que não sabemos como funciona por baixo dos panos pode ser considerado uma abstração.',
    },

    
  ];


  sum: number = 0
  previousChecked!: boolean
  nextChecked!: boolean

  nextElement(){
    const depoiments = this.depoiments.length
    this.sum = ++this.sum
 console.log(this.sum)
    if(this.sum >= depoiments){
        this.sum = depoiments - 1
       
    }
    
  }

  previousElement(){
    this.sum = --this.sum
    console.log(this.sum)
    if(this.sum <= -1){
      this.sum = 0
    }
 
  }

}