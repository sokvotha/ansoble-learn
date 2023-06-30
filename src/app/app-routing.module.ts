import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuccessComponent} from './success/success.component';
import {FailComponent} from './fail/fail.component';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  {path: '', redirectTo: 'payment', pathMatch: 'full'},
  {path: 'payment', component: PaymentComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'fail', component: FailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
