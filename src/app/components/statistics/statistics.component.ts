import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BesurlService } from '../../services/besurl.service';
import Axios from "axios";
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  crumbstitle:any = "结算统计";
  text:any;
  list: any[] = [];
  timeone:any;
  timetwo:any;  
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
    const api = this.busurl.window.productPackage;
    Axios.get(api).then((res)=>{
      console.log(res)
      this.list=res.data.records;
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
