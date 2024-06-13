import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesubmissionComponent } from './latesubmission.component';

describe('LatesubmissionComponent', () => {
  let component: LatesubmissionComponent;
  let fixture: ComponentFixture<LatesubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatesubmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatesubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
