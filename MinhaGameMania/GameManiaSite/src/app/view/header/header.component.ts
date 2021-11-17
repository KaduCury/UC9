import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenuMobile(){
    let menuSlide=document.querySelector("#menuSlide");
    if(menuSlide?.classList.contains("show")){
      menuSlide.classList.remove("show");
    } else {
      menuSlide?.classList.add("show");
    }  
  }
}
