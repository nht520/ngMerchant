import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed:any;
  // 给子组件传值
  @ViewChild('text') text: any;
  // navlist: any = [
  //   {
  //     id:"1",
  //     title:"home1",
  //     icon:"user",
  //     list:[
  //       {
  //         id:"1",
  //         title:"about",
  //         path:"about",
  //       },
  //       {
  //         id:"1",
  //         title:"class",
  //         path:"class",
  //       }
  //     ]
  //   },
  //   {
  //     id:"2",
  //     title:"home2",
  //     icon:"bars",
  //     list:[
  //       {
  //         id:"1",
  //         title:"home1",
  //         path:"/home1",
  //       },
  //       {
  //         id:"1",
  //         title:"home2",
  //         path:"/home3",
  //       }
  //     ]
  //   }
  // ]
  items: any = [
    {
      id:0,
      title:"今日统计",
      icon:"home",
      path:"daystatistics",
    },
    {
      id:1,
      title:"历史统计",
      icon:"home",
      path:"historystatistics",
    },
    // {
    //   id:0,
    //   title:"首页",
    //   icon:"home",
    //   path:"echerts",
    // },
    // {
    //   id:1,
    //   title:"个人信息",
    //   icon:"smile",
    //   path:"class",
    // },
    // {
    //   id:2,
    //   title:"修改密码",
    //   icon:"tool",
    //   path:"product",
    // },
    // {
    //   id:3,
    //   title:"产品管理",
    //   icon:"cloud-server",
    //   path:"about",
    // },
    // {
    //   id:4,
    //   title:"结算统计",
    //   icon:"dot-chart",
    //   path:"statistics",
    // },
  ]
  constructor( public storage:StorageService) { }
  menu(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }
  navtext(e){ 
    this.text = e.target.innerText;
    this.storage.set("navlist",this.text);
  }

}
