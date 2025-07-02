import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { testimonials } from './testimonialsList';
import { Brand, iTestimonial } from './testimonialsInterface';
import { brands } from './testimonialsBrands';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
})
export class Ltestimonials {
  testimonials: iTestimonial[] = testimonials;
  brands: Brand[] = brands;
}
