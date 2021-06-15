import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PaymentResponseModel} from '../_models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  callPayment(value: any) {
    return this.httpClient.post<PaymentResponseModel>(`${this.apiUrl}/payment/sale`, {value});
  }
}
