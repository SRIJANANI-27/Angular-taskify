import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrptaskComponent } from './grptask.component';

describe('GrptaskComponent', () => {
  let component: GrptaskComponent;
  let fixture: ComponentFixture<GrptaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrptaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrptaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
