import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BesurlService {
  api: any = 'http://47.75.163.229:9999';
  constructor(public http: HttpClient) { }
  window: any = {
    AXIOS_TIMEOUT: 10000,
    login:this.api+"/login",
    productPackage:this.api+'/merchant',
    //统计渠道概述【日期】
    channelsummzrize:this.api+'/report/channelOverview',
  }

  // 封装方法
  // get(api) {
  //   return new Promise((resolve, reject) => {
  //       this.http.get(this.domain + api).subscribe((response) => {
  //           resolve(response);
  //       });
  //   });
  // }
  // post(api) {
  //   return new Promise((resolve, reject) => {
  //       this.http.post(this.domain + api).subscribe((response) => {
  //           resolve(response);
  //       });
  //   });
  // }
}
