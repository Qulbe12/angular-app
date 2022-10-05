import {Component, Inject, Input, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
// @ts-ignore
@Component({
  selector: 'x-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.css'],
})
export class NavBarDashboardComponent {
  constructor(@Inject(DOCUMENT)  document:Document) {

  }

  @Input()
  label = ""
  @Input()
  routerLink = ""



  toggleAsideNav(){
   const sideBar =  document.getElementById('sidebar') as HTMLElement
    if(sideBar.classList.contains('hidden')){
      sideBar.classList.remove('hidden')
    }else{
      sideBar.classList.add('hidden')
    }

  }








}
