import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { BesurlService } from '../../services/besurl.service';
import Axios from 'axios';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  crumbstitle:any = "产品管理";
  text:any;
  value1:any;
  value2:any; 
  selectedValue:any;
  value:any;
  seletclabe:any = [
    "1","2","3","4"
  ]
  constructor(public storage:StorageService, public busurl:BesurlService) { }
  usertext(){
    this.text = this.storage.get("navlist");
  }
  list: any[] = [];

// 搜索
  handle(event: any):void {
    this.value = event;
    console.log(this.value);
  }
  searchClick(){
    console.log(this.value1 + '+' +  this.value2 + '+' + this.value);
    const api = this.busurl.window.meal;
    Axios.get(api).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }
  // 获取table数据
   userlist(){
      const api = this.busurl.window.productPackage;
      Axios.get(api).then((res)=>{
        console.log(res)
        this.list=res.data.records;
      }).catch((err)=>{
        console.log(err)
      })
   }
  //  获取当前行的数据
  examine(e){
    console.log(e);
  }
  // 删除当前行数据
  delkey(e){
    console.log(e);
  }
  ngOnInit() {
    this.usertext();
    this.userlist();
  }

}
