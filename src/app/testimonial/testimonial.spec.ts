import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ltestimonials } from './testimonial';

describe('Testimonial', () => {
  let component: Ltestimonials;
  let fixture: ComponentFixture<Ltestimonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ltestimonials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ltestimonials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
