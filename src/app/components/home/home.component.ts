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
  navlist: any = [
    {
      id:"1",
      title:"home1",
      icon:"user",
      list:[
        {
          id:"1",
          title:"about",
          path:"about",
        },
        {
          id:"1",
          title:"class",
          path:"class",
        }
      ]
    },
    {
      id:"2",
      title:"home2",
      icon:"bars",
      list:[
        {
          id:"1",
          title:"home1",
          path:"/home1",
        },
        {
          id:"1",
          title:"home2",
          path:"/home3",
        }
      ]
    }
  ]
  constructor( public storage:StorageService) { }
  menu(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }
  navtext(e){
    this.text = e.target.innerText;
    this.storage.set("user",this.text);
  }

}
