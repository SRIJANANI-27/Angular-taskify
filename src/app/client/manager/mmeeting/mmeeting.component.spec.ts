import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmeetingComponent } from './mmeeting.component';

describe('MmeetingComponent', () => {
  let component: MmeetingComponent;
  let fixture: ComponentFixture<MmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MmeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
