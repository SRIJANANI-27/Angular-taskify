import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DychartComponent } from './dychart.component';

describe('DychartComponent', () => {
  let component: DychartComponent;
  let fixture: ComponentFixture<DychartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DychartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
