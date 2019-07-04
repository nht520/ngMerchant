import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-echerts',
  templateUrl: './echerts.component.html',
  styleUrls: ['./echerts.component.scss']
})
export class EchertsComponent implements OnInit {
  crumbstitle:any = "首页";
  text:any = "";
  constructor(public storage:StorageService,public router:Router) { }

  ngOnInit() {
    this.breadtext();
    this.ifusername();
  }
  breadtext(){
    this.text=this.storage.get("navlist");
  }
  ifusername(){
    const name = this.storage.get("user");
    if( name === null || name === undefined){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['/home']);
    }
  }
}
