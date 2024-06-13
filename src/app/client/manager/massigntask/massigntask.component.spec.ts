import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassigntaskComponent } from './massigntask.component';

describe('MassigntaskComponent', () => {
  let component: MassigntaskComponent;
  let fixture: ComponentFixture<MassigntaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassigntaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassigntaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
