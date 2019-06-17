import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  crumbstitle:any = "个人信息";
  text:any;
  constructor(public storage:StorageService) { }

  ngOnInit() {
    this.usertext();
  }
  usertext(){
    this.text = this.storage.get("user");
  }

}
