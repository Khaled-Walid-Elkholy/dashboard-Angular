import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'angular-project';
  collapsed= signal(false);

  sidenavWidth= computed(()=> this.collapsed()? '65px' :'250px');







}
























/**
 *  
 *   //  standalone: true,
  // imports: [CommonModule, RouterOutlet,
  //    MatToolbarModule, MatButtonModule, 
  //     MatIconModule,MatSidenavModule,
       
  //    ]
 * 
 * 
//  template:`
//     <mat-toolbar class="mat-elevation-z3">
//         <button mat-icon-button>
//           <mat-icon>menu</mat-icon>
//         </button>
//     </mat-toolbar>
//     <mat-sidenav-container>
//     <mat-sidenav opened mode="side" [style.width]="'250px'">hello</mat-sidenav>
//     <mat-sidenav-content class="content">
//         <router-outlet></router-outlet>

//     </mat-sidenav-content>
//     </mat-sidenav-container>
  
  
//   ` , 
//   styles:[`

//     mat-toolbar{
//       position:relative;
//       z-index:5;
//     }

//      .content{
//       padding:24px
//     }

//     mat-sidenav-container{
//       height:clac(100vh - 64px);
//     }

//   ` 
//   ],
 */