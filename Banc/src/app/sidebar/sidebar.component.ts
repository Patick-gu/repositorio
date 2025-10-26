import { NgFor } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { __makeTemplateObject } from 'tslib';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None, // ⬅️ Isso permite que o CSS global funcione corretamente
  imports:[
    NgFor,
    RouterOutlet

  ]
})
export class SidebarComponent {
  activeIcon: string | null= null;
  constructor(private route: Router){}
  icons = [
    { name: 'home', src: './img/lar.png', route: '' },
    { name: 'card', src: './img/cartao-de-credito.png', route: '' },
    { name: 'bank', src: './img/banco.png', route: '' },
    { name: 'plus', src: './img/mais.png', route: '' },
    { name: 'entrada', src: './img/shopping-bag-add.png', route: '/entrada'},
    { name: 'saida', src: './img/bag-shopping-minus.png', route: '/saidas'},

  ];
  

  setActiveIcon(name: string, route: string): void {
    this.activeIcon = name;
    this.route.navigate([route]);
  }
}
