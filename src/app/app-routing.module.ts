import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { EchertsComponent } from './components/echerts/echerts.component';
import { ClassComponent } from './components/class/class.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductComponent } from './components/product/product.component';
const routes: Routes = [
  {
    path :'',
    component : LoginComponent
  },
  {
    path :'home',
    component : HomeComponent,
    children: [
      {
        path:'echerts',
        component:EchertsComponent
      },
      {
        path :'about',
        component : AboutComponent
      },
      {
        path :'class',
        component : ClassComponent
      },
      {
        path :'statistics',
        component : StatisticsComponent
      },
      {
        path :'product',
        component : ProductComponent
      },
      // 路由默认页面
      {
        path : '**',
        redirectTo : 'echerts'
      },
    ]
  },
  {
    path: '**', redirectTo: 'echerts'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
