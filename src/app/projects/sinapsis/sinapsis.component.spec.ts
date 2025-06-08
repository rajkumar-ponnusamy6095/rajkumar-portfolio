import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinapsisComponent } from './sinapsis.component';

describe('SinapsisComponent', () => {
  let component: SinapsisComponent;
  let fixture: ComponentFixture<SinapsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinapsisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SinapsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
