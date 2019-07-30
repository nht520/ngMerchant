import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BesurlService } from '../../services/besurl.service';
import Axios from "axios";

@Component({
  selector: 'app-bindingcard',
  templateUrl: './bindingcard.component.html',
  styleUrls: ['./bindingcard.component.scss']
})
export class BindingcardComponent implements OnInit {

  crumbstitle:any = "绑定银行卡";
  text:any;
  list: any[] = [];
  timeone:any;
  timetwo:any;
  show:false;
  total:number = 0;

  id: any;
  merchantBank: any;
  merchantBranch: any;
  merchantPayee: any;
  merchantBankAccount: any;
  merchantBankProvince: any;
  merchantBankCity: any;
  constructor( public storage:StorageService, public busurl:BesurlService) { }
  usertext(){
    this.text = this.storage.get("navlist");
  }
  ngOnInit() {
    this.usertext();
    this.userlist();
  }
  // 列表
  userlist(){
    const api = this.busurl.window.channel+'/getBank';
    var param = {
      params:{
        merchantId:this.storage.get("user").id,
      }
    };
    Axios.get(api,param).then((res)=>{
      this.list=res.data.records;
    }).catch((err)=>{
      console.log(err)
    })
  }
  // xx(){
  //   // alert("111111")
  //   this.show = true;
  // }
  addOrUpdate(){
    if(this.id=='' || this.id==null){
      this.add();
    }else{
      this.updateData();
    }
  }
  addbank(){
    this.show=true;
    this.id = '';
    this.merchantBank = '';
    this.merchantBranch = '';
    this.merchantPayee = '';
    this.merchantBankAccount = '';
    this.merchantBankProvince = '';
    this.merchantBankCity = '';
  }
  updateData(){
    this.show = false;
    const api=this.busurl.window.channel+'/updateBank';
    let _param = new URLSearchParams();
    _param.append("id",this.id);
    _param.append("merchantBank",this.merchantBank);
    _param.append("merchantBranch",this.merchantBranch);
    _param.append("merchantPayee",this.merchantPayee);
    _param.append("merchantBankAccount",this.merchantBankAccount);
    _param.append("merchantBankProvince",this.merchantBankProvince);
    _param.append("merchantBankCity",this.merchantBankCity);
    Axios.post(api,_param).then((res)=>{
      this.userlist();
      this.card.toggle2 = false
    }).catch((err)=>{
    })
  }
  add(){
    this.show = false;
    const api=this.busurl.window.channel+'/addBank';
    let _param = new URLSearchParams();
    _param.append("merchantId",this.storage.get("user").id);
    _param.append("merchantBank",this.merchantBank);
    _param.append("merchantBranch",this.merchantBranch);
    _param.append("merchantPayee",this.merchantPayee);
    _param.append("merchantBankAccount",this.merchantBankAccount);
    _param.append("merchantBankProvince",this.merchantBankProvince);
    _param.append("merchantBankCity",this.merchantBankCity);
    Axios.post(api,_param).then((res)=>{
      this.userlist();
      this.card.toggle2 = false
    }).catch((err)=>{
    })
  }
  update(ref: any){
    this.id = ref.rowData.id;
    this.merchantBank = ref.rowData.merchantBank;
    this.merchantBranch = ref.rowData.merchantBranch;
    this.merchantPayee = ref.rowData.merchantPayee;
    this.merchantBankAccount = ref.rowData.merchantBankAccount;
    this.merchantBankProvince = ref.rowData.merchantBankProvince;
    this.merchantBankCity = ref.rowData.merchantBankCity;
    this.show = true;
  }
  delete(ref: any){
    this.show = false;
    const api=this.busurl.window.channel+'/deleteBank';
    let _param = new URLSearchParams();
    _param.append("id", ref.rowData.id);
    Axios.post(api,_param).then((res)=>{
      this.userlist();
    }).catch((err)=>{
    })
  }
  handle(time: number) {
    // [time] is string
    console.log(time)
    this.timeone = time;
  }
  handone(time: number){
    console.log(time);
    this.timetwo = time;
  }
  // 删除
  clearClickHandle(){
    console.log("删除")
  }
  // 搜索
  searchClick(){
    console.log(this.timeone+this.timetwo)
  }
}
