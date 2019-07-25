import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
// import { EchertsComponent } from './components/echerts/echerts.component';
import { ClassComponent } from './components/class/class.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductComponent } from './components/product/product.component';
import { BusstatisticsComponent } from './components/busstatistics/busstatistics.component';
import { DaystatisticsComponent } from './components/daystatistics/daystatistics.component';
import { HistorystatisticsComponent } from './components/historystatistics/historystatistics.component';
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
        path:'daystatistics',
        component:DaystatisticsComponent
      },
      {
        path :'historystatistics',
        component : HistorystatisticsComponent
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
      {
        path :'busstatistics',
        component : BusstatisticsComponent
      },
      // 路由默认页面
      {
        path : '**',
        redirectTo : 'daystatistics'
      },
    ]
  },
  {
    path: '**', redirectTo: 'daystatistics'
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
