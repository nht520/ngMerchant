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
  crumbstitle:any = "个人信息";
  text:any;
  value1:any;
  value2:any; 
  selectedValue:any;
  seletclabe:any = [
    "1","2","3","4"
  ]
  constructor(public storage:StorageService, public busurl:BesurlService) { }
  usertext(){
    this.text = this.storage.get("user");
  }

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    // {
    //   text: 'Select Odd Row',
    //   onSelect: () => {
    //     this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
    //     this.refreshStatus();
    //   }
    // },
    // {
    //   text: 'Select Even Row',
    //   onSelect: () => {
    //     this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
    //     this.refreshStatus();
    //   }
    // }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: any[] = [];
  list: any[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event: Array<{ id: number; name: string; age: number; address: string }>): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
// 
  searchClick(){
    console.log(this.value1 + '+' +  this.value2 + '+' + this.selectedValue);
    const api = this.busurl.window.meal;
    Axios.get(api).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }
  // 列表 
   userlist(){
      const api = this.busurl.window.stockLog;
      Axios.get(api).then((res)=>{
        console.log(res)
        this.list=res.data.records;
      }).catch((err)=>{
        console.log(err)
      })
   }
  //  获取当前行的数据
  delkey(e){
    console.log(e);
  }
  ngOnInit() {
    this.usertext();
    this.userlist();
    // for (let i = 0; i < 50; i++) {
    //   this.list.push({
    //     id: i,
    //     name: `Edward King ${i}`,
    //     age: 32,
    //     address: `London, Park Lane no. ${i}`
    //   });
    // }
  }

}
