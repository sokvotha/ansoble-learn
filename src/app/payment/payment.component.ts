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
            merchantId: ['901030000010003', Validators.required],
            secretKey: ['BImaG5rvMjGm3x/krF1M8p3mprE2j4j+uxgpybdnmEKz30dFF+Mnk+tMOBIzE58cZJCrtVXi+rNbvaW3eceUlA==', Validators.required],
            storeId: ['800010000010001', Validators.required],
            terminalId: ['70000015', Validators.required],
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
        setTimeout( () => {
            console.log('value ', value);
        });
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
