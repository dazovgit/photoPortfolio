import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ContactService } from './contactService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.contactService.saveContact(this.contactForm.value);
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;

      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }
}

