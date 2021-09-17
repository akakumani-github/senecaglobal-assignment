import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  baseUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private client: HttpClient) {
    this.baseUrl = 'https://localhost:/';
  }
  InsertContactDetails(contact: any) {
 // sample of HTTP call
    //  this.client.post<any>(
    //   this.baseUrl + 'api/Contact/InsertContact',
    //   contact,
    //   this.httpOptions
    // );
    return JSON.stringify(contact.value, null, 4)
   
  }
}
