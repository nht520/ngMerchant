import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed:any;
  username:any;
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
    // {
    //   id:0,
    //   title:"今日统计",
    //   icon:"area-chart",
    //   path:"daystatistics",
    // },
    {
      id:1,
      title:"统计",
      icon:"area-chart",
      path:"historystatistics",
    },
    {
      id:2,
      title:"绑定银行卡",
      icon:"area-chart",
      path:"bindingcard",
    },
    {
      id:3,
      title:"申请结算",
      icon:"area-chart",
      path:"settlement",
    },
    {
      id:4,
      title:"结算记录",
      icon:"area-chart",
      path:"settlementlist",
    },
    {
      id:5,
      title:"订单记录",
      icon:"area-chart",
      path:"order",
    }
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
  constructor( public storage:StorageService, public router:Router,) { }
  menu(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.ifusername()
  }
  navtext(e){ 
    this.text = e.target.innerText;
    this.storage.set("navlist",this.text);
  }
  // 退出
  userclose(){
    this.storage.remove("user");
    this.ifusername();
  }
  // 拍断用户是否登录
  ifusername(){
   this.username = this.storage.get("user");
   if(this.username === "" || this.username === null ||this.username === undefined){
    this.router.navigate(['']);
   }
  }

}
