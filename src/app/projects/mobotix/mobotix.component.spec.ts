import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobotixComponent } from './mobotix.component';

describe('MobotixComponent', () => {
  let component: MobotixComponent;
  let fixture: ComponentFixture<MobotixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobotixComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobotixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
