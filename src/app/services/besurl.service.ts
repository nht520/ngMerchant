import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BesurlService {
  api: any = 'http://2h1037w727.51mypc.cn:41884';
  // domainone:string = 'http://wx.bomao.xyz:8181/distributor';
  constructor(public http: HttpClient) { }
  window: any = {
    AXIOS_TIMEOUT: 10000,
    login:this.api+"/login",
    productPackage:this.api+'/merchant',
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
