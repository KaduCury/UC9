import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    let dados =`
    Nome: ${form.value.nome}
    E-mail: ${form.value.email}
    Telefone: ${form.value.telefone}
    Mensagem: ${form.value.mensagem}`
    console.log(dados);
  }
}
