import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersubmissionComponent } from './managersubmission.component';

describe('ManagersubmissionComponent', () => {
  let component: ManagersubmissionComponent;
  let fixture: ComponentFixture<ManagersubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagersubmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagersubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
