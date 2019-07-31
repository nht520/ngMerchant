import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { BesurlService } from '../../services/besurl.service';
import Axios from "axios";
@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit {

  crumbstitle: any = "申请结算";
  text: any;
  settlementAmount: number = 0;//可结算金额
  cashAmount: number;//提现金额
  bankList: any;
  payPass: any;
  bankId: any
  constructor( public storage:StorageService, public busurl:BesurlService) { }
  usertext(){
    this.text = this.storage.get("navlist");
  }
  searchSettlement(){
    const api = this.busurl.window.settlement+'/channelSettlement';
    let param = new URLSearchParams();
    param.append("channelId",this.storage.get("user").id);
    Axios.post(api,param).then((res)=>{
      // console.log(res);
      this.settlementAmount = res.data.data.settlementAmount;
    }).catch((err)=>{
      console.log(err);
    });
  }
  findAllBank(){
    const api = this.busurl.window.channel+'/findBankAll';
    let param = {
      params:{
        merchantId: this.storage.get("user").id,
      }
    };
    Axios.get(api,param).then((res)=>{
      console.log(res);
      this.bankList = res.data.data;
    }).catch((err)=>{
      console.log(err);
    });
  }

  cashSettlement(){
    const api = this.busurl.window.settlement+'/cashSettlement';
    let param = new URLSearchParams();
    param.append("channelId",this.storage.get("user").id);
    param.append("cashAmount",this.cashAmount);
    param.append("bankId",this.bankId);
    param.append("payPass",this.payPass);
    Axios.post(api,param).then((res)=>{
      console.log(res)
      if(res.data.code === 200){
        this.searchSettlement();
      }else{
        alert(res.data.msg);
      }
      }
    ).catch((err)=>{
      console.log(err);
    });
  }
  ngOnInit() {
    this.usertext();
    this.searchSettlement();
    this.findAllBank();
  }

}
