import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
// @ts-ignore
@Component({
  selector: 'x-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.css'],
})
export class NavBarDashboardComponent implements OnInit{
  constructor(@Inject(DOCUMENT)  document:Document) {

  }

  ngOnInit(): void {

  }

  toggleAsideNav(){
   const sideBar =  document.getElementById('sidebar') as HTMLElement
    if(sideBar.classList.contains('hidden')){
      sideBar.classList.remove('hidden')
    }else{
      sideBar.classList.add('hidden')
    }

  }








}
