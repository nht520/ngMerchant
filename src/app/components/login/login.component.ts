import { Component, OnInit,ViewChild } from '@angular/core';
import { BesurlService } from '../../services/besurl.service';
import { StorageService } from '../../services/storage.service';
import { Router} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import Axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('father') father: any;
  username:any = "";
  password:any = "";
  constructor(
    public router:Router, public besurl:BesurlService,
    private message: NzMessageService,
    public storage:StorageService) { }
  ngOnInit() {
    this.ifusername()
  }
  
  login(){
     const api = this.besurl.window.login;
    // const fileForm = new FormData();
    //     fileForm.append('username', this.username);
    //     fileForm.append('pwd', this.password);
      const from = new URLSearchParams();
            from.append("username",this.username);
            from.append("password",this.password);
      Axios.post(api,from).then((res)=>{
        console.log(res);
        const status = res.data.code;
        if(status === 200){
          this.message.success(res.data.msg);
          this.storage.set("user",res.data.data);
          this.router.navigate(['/home']);
        }else{
          this.message.error(res.data.msg);
        }
      }).catch((err)=>{
        console.log(err)
      })
  }
  run(){
    console.log("1111111")
  }
  // 判断用户是否登录
  ifusername(){
    const name = this.storage.get("user");
    if( name === null || name === undefined){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['/home']);
    }
  }
 


}
