import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-echerts',
  templateUrl: './echerts.component.html',
  styleUrls: ['./echerts.component.scss']
})
export class EchertsComponent implements OnInit {
  crumbstitle:any = "首页";
  text:any = "";
  constructor(public storage:StorageService) { }

  ngOnInit() {
    this.breadtext();
  }
  breadtext(){
    this.text=this.storage.get("navlist");
  }
}
