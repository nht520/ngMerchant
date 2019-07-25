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
  pages:any;

  constructor( public storage:StorageService, public busurl:BesurlService) { }
  usertext(){
    this.text = this.storage.get("navlist");
  }
  ngOnInit() {
    this.usertext();
    this.userlist();
  }
  // 列表
  userlist(e){
    const api = this.busurl.window.daystatistics;
    var param = {
      params:{
        channelId:this.storage.get("user").id,
        current:e,
      }
    };
    Axios.get(api,param).then((res)=>{
      console.log(res)
      this.list=res.data.records;

      this.current = res.data.pages;
      this.size = res.data.size;
      this.total = res.data.total;
      this.model = res.data.current;
      
    }).catch((err)=>{
      console.log(err)
    })
  }

  nav(e){
    this.pages = e;
    this.userlist(this.pages);
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
