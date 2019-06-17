import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BesurlService {
  api = 'http://wx.bomao.xyz:8080/distributor';
  // domainone:string = 'http://wx.bomao.xyz:8181/distributor';
  constructor(public http: HttpClient) { }
  window: any = {
    AXIOS_TIMEOUT: 10000,
    login:this.api+"/distributor/member/login",
    findById:this.api+"/distributor/member/findById",
    register:this.api+'/distributor/member/updatePass',
    mcMembers:this.api+'/distributor/mcMembers/findById',
    //我的库存
    getBoxNum:this.api+"/distributor/stock/getBoxNum",
    //订货订单
    stockLog:this.api+'/distributor/stockLog',
    //库存
    stock:this.api+'/distributor/stock',
    //  套餐
    meal:this.api+"/distributor/meal",
    mealDts:this.api+"/distributor/meal/findById?id=",
    //自己发货订单
    indent:this.api+"/distributor/order",
    update:this.api+"/distributor/order/update",
    //后台发货订单
    deliver:this.api+"/distributor/order/deliver",
    //分销订单
    subordinate:this.api+"/distributor/subordinate",
  //  经销商用户
    distname:this.api+"/distributor/member",
    //地址
    // 省
    getProvince:this.api+"/distributor/systemAddress/getProvince",
    //市province
    getCity:this.api+"/distributor/systemAddress/getCity",
    //区city
    getCounty:this.api+"/distributor/systemAddress/getCounty",
    //添加地址
    addressadd:this.api+"/distributor/address",
  //  查询地址邮费
    findCost:this.api+"/distributor/addressCost",
  //  修改地址邮费
    delupdate:this.api+"/distributor/addressCost/update",
  //  修改地址
    adsupdate:this.api+"/distributor/address/update",
    //查询所有会员
    hopMember:this.api+"/distributor/shopMember"
  
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
