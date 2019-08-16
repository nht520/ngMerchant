import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BesurlService } from '../../services/besurl.service';
import Axios from "axios";
@Component({
  selector: 'app-historystatistics',
  templateUrl: './historystatistics.component.html',
  styleUrls: ['./historystatistics.component.scss']
})
export class HistorystatisticsComponent implements OnInit {
  crumbstitle:any = "历史统计";
  text:any;
  list: any[] = [];
  timeone:any;
  timetwo:any;
  current = 1;
  size = 10;
  total:any;
  model = 1;
  pages:any=[];
  listone:any=[
    {
      id:0,
      name:"10",
    },
    {
      id:1,
      name:"10",
    },
    {
      id:2,
      name:"10",
    },
    {
      id:3,
      name:"10",
    },
    {
      id:4,
      name:"10",
    }
  ];
  totalAmount: number = 0;
  payCountTotal: number = 0;
  installCountTotal: number = 0;
  packageNo: any;
  settlementAmount:any;

  constructor( public storage:StorageService, public busurl:BesurlService) { }
  usertext(){
    this.searchSettlement();

  }
  ngOnInit() {
    this.usertext();
    this.userlist();
  }
  synClick(){
    const api = this.busurl.window.daystatistics+'/synchronizationData';
    let param = new URLSearchParams();
    param.append("channelId",this.storage.get("user").id);
    Axios.post(api,param).then((res)=>{
      console.log(res);
      alert("同步成功");
      this.userlist();
    }).catch((err)=>{
      console.log(err);
    })
  }
  searchSettlement(){
    const api = this.busurl.window.settlement+'/channelSettlement';
    let param = new URLSearchParams();
    param.append("channelId",this.storage.get("user").id);
    Axios.post(api,param).then((res)=>{
      // console.log(res);
      this.settlementAmount = res.data.data.settlementAmount;
      this.text = this.storage.get("navlist")+",可提现统计："+this.settlementAmount;
    }).catch((err)=>{
      console.log(err);
    });
  }
  // 列表
  userlist(){
    const api = this.busurl.window.daystatistics;
    var param = {
      params:{
        channelId:this.storage.get("user").id,
        packageNo:this.packageNo,
      }
    };
    Axios.get(api,param).then((res)=>{
      console.log(res)
      this.list=res.data.records;

      this.current = res.data.pages;
      this.size = res.data.size;
      this.total = res.data.total;
      this.model = res.data.current;
      this.totalAmount = 0;
      this.payCountTotal = 0;
      this.installCountTotal = 0;
      for(let i=0;i<this.list.length;i++){
        this.totalAmount = Number(this.totalAmount) + Number(this.list[i].channelRevenue);
        this.payCountTotal = Number(this.payCountTotal) + Number(this.list[i].channelPayCount);
        this.installCountTotal = Number(this.installCountTotal) + Number(this.list[i].installCount);
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  nav(e){
    this.pages = e;
    const api = this.busurl.window.daystatistics;
    var param = {
      params:{
        channelId:this.storage.get("user").id,
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
      this.payCountTotal = 0;
      this.installCountTotal = 0;

      for(let i=0;i<this.list.length;i++){
        this.totalAmount = Number(this.totalAmount) + Number(this.list[i].channelRevenue);
        this.payCountTotal = Number(this.payCountTotal) + Number(this.list[i].channelPayCount);
        this.installCountTotal = Number(this.installCountTotal) + Number(this.list[i].installCount);
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
    console.log(this.timeone+this.timetwo)
    const api = this.busurl.window.daystatistics;
    var param = {
      params:{
        channelId:this.storage.get("user").id,
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
      this.totalAmount = 0;
      this.payCountTotal = 0;
      this.installCountTotal = 0;
      for(let i=0;i<this.list.length;i++){
        this.totalAmount = Number(this.totalAmount) + Number(this.list[i].channelRevenue);
        this.payCountTotal = Number(this.payCountTotal) + Number(this.list[i].channelPayCount);
        this.installCountTotal = Number(this.installCountTotal) + Number(this.list[i].installCount);
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
}
