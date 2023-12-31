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
        // this.f = this.fb.group({
        //     merchantId: ['900010000080004', Validators.required],
        //     secretKey: ['6H6dQ1pl6xL5sh6P6RougWK62+5dei27FsQ8PjV/3/BxHiEpfKw7uVdCLxJ/AFCSi6NnO6u65+Rb5bNXciyC4A==', Validators.required],
        //     storeId: ['800010000080001', Validators.required],
        //     terminalId: ['70000001', Validators.required],
        //     txId: [new Date().getTime(), Validators.required],
        //     amt: [5.00, Validators.required],
        //     currency: ['USD', Validators.required],
        //     accountToken: '',
        //     successUrl: 'http://localhost:4000/#/success/',
        //     failUrl: 'http://localhost:4000/#/fail/',
        //     callbackApiUrl: 'https://6dc6e413cc50.ngrok.io/cashier/amk/callback/callback',
        //     description: 'Product A, Product B',
        //     timestamp: new Date().getTime(),
        //     hash: ''
        // });
        this.f = this.fb.group({
            merchantId: ['913010000000036', Validators.required],
            secretKey: ['DgNcno21k9FabG33ELF9QrXY39dy1HPOnW8JMJ474/ccJyWntFc8MJpXmVN+mp1rUzZCuY0+mOQ924TjBn5hoQ==', Validators.required],
            storeId: ['813010000000004', Validators.required],
            terminalId: ['70000003', Validators.required],
            txId: [new Date().getTime(), Validators.required],
            amt: [50, Validators.required],
            currency: ['USD', Validators.required],
            accountToken: 'votha-tokent-89980-ancb-7976',
            successUrl: 'http://192.168.4.21:4000/#/success/',
            failUrl: 'http://192.168.4.21:4000/#/fail/',
            callbackApiUrl: 'http://localhost:8000/v1/api/setting/confirm-payment-from-amkpayway',
            description: 'Product A, Product B',
            timestamp: new Date().getTime(),
            hash: ''
        });
    }

    // submit(value: PaymentRequestModel) {
    //     const data =
    //         `${value.merchantId}.${value.storeId}.${value.terminalId}.${value.txId}.${value.amt}.${value.currency}.${value.timestamp}`;
    //     console.log(data);
    //     value.hash = this.helperService.generate(data, value.secretKey);
    //     setTimeout( () => {
    //         console.log('value ', value);
    //     });
    //     this.paymentService.callPayment(value).subscribe(
    //         (res) => {
    //             console.log(res);
    //             if (res.response.code === 200) {
    //                window.location.href = res.result.url;
    //             } else {
    //                 console.log(res.response);
    //             }
    //         },
    //         (error) => {
    //             console.log(error.message);
    //         }
    //     );
    // }
}
