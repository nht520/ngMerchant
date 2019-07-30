import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BesurlService } from '../../services/besurl.service';
import Axios from "axios";
@Component({
  selector: 'app-daystatistics',
  templateUrl: './daystatistics.component.html',
  styleUrls: ['./daystatistics.component.scss']
})
export class DaystatisticsComponent implements OnInit {

  crumbstitle:any = "今日统计";
  text:any;
  list: any[] = [];
  timeone:any;
  timetwo:any;
  total:number = 0;
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
    const api = this.busurl.window.daystatistics+'/dayStatistics';
    var param = {
      params:{
        channelId:this.storage.get("user").id,
      }
    };
    Axios.get(api,param).then((res)=>{
      console.log(res)
      this.list=res.data.data;
      for(let i=0;i<this.list.length;i++){
        this.total = Number(this.total) + Number(this.list[i].revenue);
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
  }

}
