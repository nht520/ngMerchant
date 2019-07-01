import { Component, OnInit,Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  // 接受伏组件传递过来的数据
  @ Input() error: any;
  @ Input() success: any;
  @ Input() info: any;
  @ Input() warning: any; 
  // 接受伏组件传递过来的方法
  @ Input() run: any;
  constructor(   private message: NzMessageService,) { }

  ngOnInit() {
  }

  createBasicinfo() {
    this.message.info(this.info);
  }
  createBasicsuccess() {
    this.message.success(this.success);
  }
  createBasicerror() {
    this.message.error(this.error);
  }
  createBasicwarning() {
    this.message.warning(this.warning);
  }
  // 获取伏组件的方法
  runone(){
    this.run()
  }

  

}
