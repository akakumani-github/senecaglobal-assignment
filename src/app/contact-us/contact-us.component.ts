import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../services/contactus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  Locations: string[] = ['India', 'UK', 'USA'];
  constructor(
    private formBuilder: FormBuilder,
    public contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      moreInfo: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      location: ['', Validators.required],
      accept: [true, Validators.requiredTrue],
      gender: ['male', [Validators.required]],
    });
  }
  get formFields() {
    return this.contactForm.controls;
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    let res = this.contactService.InsertContactDetails(this.contactForm);
    Swal.fire({
      icon: 'success',
      title: 'Details Saved Successfully',
      text: res,
      showConfirmButton: true,
    });
  }
}
