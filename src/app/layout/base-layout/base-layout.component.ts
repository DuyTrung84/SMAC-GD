import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  isMenuOpen = false;

  constructor() { }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    var menu = document.getElementById("mobile-menu"); // Thay "mobile-menu" bằng ID của menu mobile của bạn
    if (menu) {
      menu.style.display = this.isMenuOpen ? "block" : "none";
  }

    var menu = document.getElementById("mobile-menu");
    if (this.isMenuOpen) {
      if(menu){
        menu.classList.add("translate-x-0");
      }
        
    } else {
        if(menu){
          menu.classList.remove("translate-x-0");
        }
    }
}
  
  ngOnInit(): void {
  }

}
