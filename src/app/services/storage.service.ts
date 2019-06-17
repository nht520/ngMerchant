import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    
   }
  get( key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  set( key: string, value: any ) {
    localStorage.setItem(key,JSON.stringify(value));
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
// ng g service services/storage
// app.module.ts 里面映入创建的服务  并且声明
// import { StorageService } from './services/storage.service';
// 在用到的组件里面 在引入一次 import { StorageService } from './services/storage.service';
// // 初始化 获取
// constructor( public storage:StorageService) {
//   console.log(    this.storage.get() )
// }
