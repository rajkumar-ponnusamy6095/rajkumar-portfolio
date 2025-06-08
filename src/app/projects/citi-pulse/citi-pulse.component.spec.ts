import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiPulseComponent } from './citi-pulse.component';

describe('CitiPulseComponent', () => {
  let component: CitiPulseComponent;
  let fixture: ComponentFixture<CitiPulseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiPulseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitiPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
