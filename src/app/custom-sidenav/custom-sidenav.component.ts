import { Component, Input, computed, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list'

export type MenuItem =  {
  icon:string;
  lable:string;
  route?:any
}



@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val)
  }


  menuItems= signal<MenuItem[]>([
    {
      icon: 'dashboard',
      lable:'Dashboard',
      route:'dashboard'
      
    },
    {
      icon: 'video_library',
      lable:'Content',
      route:'content'
    },
     {
      icon: 'analytics',
      lable:'Analytics',
      route:'analytics'
    },
    {
      icon: 'comments',
      lable:'Comments',
      route:'comments'
    }
  ])

  profilePicSize=computed(()=>this.sideNavCollapsed()? '32' : '100');




}
