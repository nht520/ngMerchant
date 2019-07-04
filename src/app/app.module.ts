import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 引用服务
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 外部ui库
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
// import module
import { ElModule } from 'element-angular'
// if you use webpack, import style
import 'element-angular/theme/index.css'

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
// 打包空白需要LocationStrategy, HashLocationStrategy 
import { RouteReuseStrategy } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StorageService } from './services/storage.service';
import { BesurlService } from './services/besurl.service';
// 组件
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { EchertsComponent } from './components/echerts/echerts.component';
import { ClassComponent } from './components/class/class.component';
import { MessageComponent } from './components/message/message.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProductComponent } from './components/product/product.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    BreadcrumbComponent,
    EchertsComponent,
    ClassComponent,
    MessageComponent,
    StatisticsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ElModule.forRoot(),
  ],
  providers: [
      StorageService,BesurlService,
      { provide: NZ_I18N, useValue: en_US },
      { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
