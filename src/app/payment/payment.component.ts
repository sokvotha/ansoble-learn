import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HelperService} from '../_services/helper.service';
import {PaymentRequestModel} from '../_models/payment.model';
import {PaymentService} from '../_services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  f: FormGroup;

  constructor(private fb: FormBuilder, private helperService: HelperService, private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.f = this.fb.group({
      merchantId: ['900010001230003', Validators.required],
      storeId: ['80007898765', Validators.required],
      terminalId: ['70023423', Validators.required],
      txId: [new Date().getTime(), Validators.required],
      amt: [5.00, Validators.required],
      currency: ['USD', Validators.required],
      accountToken: 'p8xekZxeUV0T2cZqSI6TWX5AV9KbJfIoyu/gnqQq0SZG2HuNM',
      successUrl: 'http://domain.com/payment/success/',
      failUrl: 'http://domain.com/payment/failed/',
      callbackApiUrl: '',
      description: 'Product A, Product B',
      timestamp: new Date().getTime(),
      hash: ''
    });
  }

  submit(value: PaymentRequestModel) {
    value.hash = this.helperService.generate(
      `${value.merchantId}.${value.storeId}.${value.terminalId}.${value.txId}.${value.amt}.${value.currency}.${value.timestamp}`);
    this.paymentService.callPayment(value).subscribe(
      (res) => {
        if (res.response.code === 200) {
          window.location.href = res.result.url;
        } else {
          console.log(res.response);
        }
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
