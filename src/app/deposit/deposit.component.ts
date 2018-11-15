import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  depositErrorMessage = "";
  //if user does not exist then set total balance to 0
  totalBalance =0;
  constructor() { }

  depositMoney = function(){
    if(this.depositAmount > 0){
      this.totalBalance = this.totalBalance + this.depositAmount;
      this.depositErrorMessage ="";
    }else{
      this.depositErrorMessage = "Not a valid amount to deposit.";
    }
  }

  ngOnInit() {
  }

}
