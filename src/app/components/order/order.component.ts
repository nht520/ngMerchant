import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BesurlService } from '../../services/besurl.service';
import Axios from "axios";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  crumbstitle:any = "订单记录";
  text:any;
  list: any[] = [];
  timeone:any;
  timetwo:any;
  current = 1;
  size = 10;
  total:any;
  model = 1;
  pages:any=[];
  listone:any;
  packageNo: any;
  totalAmount: number;
  startTime: any;
  endTime: any;

  constructor( public storage:StorageService, public busurl:BesurlService) { }

  usertext(){
    this.text = this.storage.get("navlist");
  }

  ngOnInit() {
    this.usertext();
    this.userlist();
  }
  // 列表
  userlist(){
    const api = this.busurl.window.order;

    var param = {
      params:{
        payChannelId:this.storage.get("user").id,
        packageNo:this.packageNo,
      }
    };
    Axios.get(api,param).then((res)=>{
      console.log(res)
      this.list= res.data.records;

      this.current = res.data.pages;
      this.size = res.data.size;
      this.total = res.data.total;
      this.model = res.data.current;
      this.totalAmount = 0;
      // this.payCountTotal = 0;
      // this.installCountTotal = 0;
      for(let i=0;i<this.list.length;i++){
        this.totalAmount = Number(this.totalAmount) + Number(this.list[i].channelAmount);
      //   this.payCountTotal = Number(this.payCountTotal) + Number(this.list[i].channelPayCount);
      //   this.installCountTotal = Number(this.installCountTotal) + Number(this.list[i].installCount);
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  nav(e){
    this.pages = e;
    const api = this.busurl.window.order;
    var param = {
      params:{
        payChannelId:this.storage.get("user").id,
        current:e,
        packageNo :this.packageNo
      }
    };
    this.list = [];
    Axios.get(api,param).then((res)=>{
      console.log(res)
      this.list=res.data.records;
      this.current = res.data.pages;
      this.size = res.data.size;
      this.total = res.data.total;
      this.model = res.data.current;
      this.totalAmount = 0;
      // this.payCountTotal = 0;
      // this.installCountTotal = 0;
      //
      for(let i=0;i<this.list.length;i++){
        this.totalAmount = Number(this.totalAmount) + Number(this.list[i].channelAmount);
      //   this.payCountTotal = Number(this.payCountTotal) + Number(this.list[i].channelPayCount);
      //   this.installCountTotal = Number(this.installCountTotal) + Number(this.list[i].installCount);
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  handle(time: number) {
    // [time] is string
    console.log(time)
    this.timeone = time;
  }
  handone(time: number){
    console.log(time);
    this.timetwo = time;
  }
  // 删除
  clearClickHandle(){
    console.log("删除")
  }
  // 搜索
  searchClick(){
    const api = this.busurl.window.order;
    var param = {
      params:{
        payChannelId:this.storage.get("user").id,
        current:1,
        startTime:this.timeone,
        endTime:this.timetwo,
        packageNo:this.packageNo
      }
    };
    this.list = [];
    Axios.get(api,param).then((res)=>{
      console.log(res)
      this.list=res.data.records;
      this.current = res.data.pages;
      this.size = res.data.size;
      this.total = res.data.total;
      this.model = res.data.current;
      this.totalAmount = 0;
      // this.totalAmount = 0;
      // this.payCountTotal = 0;
      // this.installCountTotal = 0;
      for(let i=0;i<this.list.length;i++){
        this.totalAmount = Number(this.totalAmount) + Number(this.list[i].channelAmount);
      //   this.payCountTotal = Number(this.payCountTotal) + Number(this.list[i].channelPayCount);
      //   this.installCountTotal = Number(this.installCountTotal) + Number(this.list[i].installCount);
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
}
