import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MreportComponent } from './mreport.component';

describe('MreportComponent', () => {
  let component: MreportComponent;
  let fixture: ComponentFixture<MreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
