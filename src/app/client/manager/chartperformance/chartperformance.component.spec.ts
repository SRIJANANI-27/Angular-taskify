import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartperformanceComponent } from './chartperformance.component';

describe('ChartperformanceComponent', () => {
  let component: ChartperformanceComponent;
  let fixture: ComponentFixture<ChartperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartperformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
