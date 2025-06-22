import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimadzuComponent } from './shimadzu.component';

describe('ShimadzuComponent', () => {
  let component: ShimadzuComponent;
  let fixture: ComponentFixture<ShimadzuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimadzuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShimadzuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
