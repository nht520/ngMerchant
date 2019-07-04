import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  crumbstitle:any = "修改密码";
  text:any;
  constructor(  public storage:StorageService) { }

  ngOnInit() {
    this.bread()
  }
  bread(){
    this.text=this.storage.get("navlist");
  }
}
