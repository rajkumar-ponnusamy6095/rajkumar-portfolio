import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiVelocityComponent } from './citi-velocity.component';

describe('CitiVelocityComponent', () => {
  let component: CitiVelocityComponent;
  let fixture: ComponentFixture<CitiVelocityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiVelocityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitiVelocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
