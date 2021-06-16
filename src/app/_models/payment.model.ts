export interface PaymentRequestModel {
  merchantId: string;
  storeId: string;
  terminalId: string;
  txId: string;
  amt: number;
  currency: string;
  accountToken: string;
  successUrl: string;
  failUrl: string;
  callbackApiUrl: string;
  description: string;
  timestamp: number;
  hash: string;
  secretKey: string;
}

export interface PaymentResponseModel {
  response: Response;
  result: PaymentResult;
}

export interface Response {
  code: number;
  message: string;
}

export interface PaymentResult {
  url: string;
  txnCode: string;
}
