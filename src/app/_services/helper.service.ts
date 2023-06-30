import {Injectable} from '@angular/core';
import * as hmacSHA512 from 'crypto-js/hmac-sha512';
import * as Base64 from 'crypto-js/enc-base64';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private privateKey = '0123456789';

    constructor() {
    }

    generate(text: string, key: string): string {
        return Base64.stringify(hmacSHA512(text, key));
    }
}
