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
            merchantId: ['900010000080001', Validators.required],
            secretKey: ['hXjb6TwiR5tarQyCdgaamKP21PHrW+owm2ChyBBLn5l3nrkF9ZtDJPghnt0rpZrDB+gmteXD/sounEtaI/UVxA==', Validators.required],
            storeId: ['800010000080001', Validators.required],
            terminalId: ['70000001', Validators.required],
            txId: [new Date().getTime(), Validators.required],
            amt: [5.00, Validators.required],
            currency: ['USD', Validators.required],
            accountToken: '',
            successUrl: 'http://localhost:4000/#/success/',
            failUrl: 'http://localhost:4000/#/fail/',
            callbackApiUrl: '',
            description: 'Product A, Product B',
            timestamp: new Date().getTime(),
            hash: ''
        });
    }

    submit(value: PaymentRequestModel) {
        const data =
            `${value.merchantId}.${value.storeId}.${value.terminalId}.${value.txId}.${value.amt}.${value.currency}.${value.timestamp}`;
        console.log(data);
        value.hash = this.helperService.generate(data, value.secretKey);
        this.paymentService.callPayment(value).subscribe(
            (res) => {
                console.log(res);
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
