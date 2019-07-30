import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BesurlService {
  // api: any = 'http://47.75.163.229:9996';
  // api: any = 'http://2h1037w727.51mypc.cn:41884';
  // api: any = 'http://192.168.1.7:9996';
  api: any = 'http://192.168.1.7:9996';
  // api:any='http://47.75.163.229:9996';
  // domainone:string = 'http://wx.bomao.xyz:8181/distributor';
  constructor(public http: HttpClient) { }
  window: any = {
    AXIOS_TIMEOUT: 10000,
    login:this.api+"/login",
    productPackage:this.api+'/merchant',
    //统计渠道概述【日期】
    channelsummzrize:this.api+'/report/channelOverview',
    daystatistics:this.api+'/report',
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
