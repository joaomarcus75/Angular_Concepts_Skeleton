import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  title = 'website';
  buttontitle = "títutlo do botão";
  valor = -10;
  ButtonStyle = "background:red";

  pessoas =[
    {
      nome:"Charles",
      idade:"31",
      telefone:"61 99999-99999",
      sexo:"Masculino"
    },
    {
      nome:"Aline",
      idade:"31",
      telefone:"61 99999-99999",
      sexo:"Feminino"
    },
    {
      nome:"Joao",
      idade:"31",
      telefone:"61 99999-99999",
      sexo:"Masculino"
    }

  ]

  model = {
    nome:"",
    idade:"",
    telefone:"",
    sexo:""
  }

incrementaTitle(){
  this.counter = this.counter + 1;
  this.title = 'Minha primeira página com angular' + this.counter;

}
adicionarPessoa(){
  this.pessoas.push({
    ...this.model
  })
}

}
