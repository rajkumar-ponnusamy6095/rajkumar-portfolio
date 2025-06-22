import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdwapComponent } from './adwap.component';

describe('AdwapComponent', () => {
  let component: AdwapComponent;
  let fixture: ComponentFixture<AdwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdwapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
