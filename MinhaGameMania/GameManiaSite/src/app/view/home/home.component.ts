import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tituloBanner! : string;
  textoCorpo! : string;
  constructor() { }

  ngOnInit(): void {
    this.tituloBanner! = "Venha conhecer nosso diferencial!!!"
    this.textoCorpo! = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatem, excepturi consequuntur " + 
    "suscipit totam culpa sapiente necessitatibus, quaerat delectus modi veniam alias quo molestiae ratione id beatae " + 
    "facere quasi magni!"
  }

}
