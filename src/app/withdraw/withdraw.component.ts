import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor() { }
  withdrawErrorMessage = "";
  //if user does not exist then set total balance to 0
  totalBalance =0;

  withdrawMoney = function(){
    if(this.withdrawAmount <= this.totalBalance && this.withdraw > 0){
      this.totalBalance = this.totalBalance - this.withdrawAmount;
      this.withdrawErrorMessage ="";
    }else{
      this.withdrawErrorMessage = "Not a valid amount to withdraw.";
    }
  }

  ngOnInit() {
  }

}
