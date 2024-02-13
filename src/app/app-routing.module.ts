import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ContentComponent } from './pages/content/content.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [ 
  // {path:'home' , component:HomeComponent},
  // {path:'cart' , component:CartComponent},
  // {path:'products' , component:ProductsComponent},
  // {path:'contact' , component:ContactComponent},
  // {path:'**' , component:PageNotFoundComponent},
  // {path:'' , redirectTo:'/custom', pathMatch:'full'},
  {path:'' , redirectTo:'', pathMatch:'full'},
  {path:'dashboard' , component:DashboardComponent},
  {path:'content' , component:ContentComponent},
  {path:'analytics' , component:AnalyticsComponent},
  {path:'comments' , component:CommentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
