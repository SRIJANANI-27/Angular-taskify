import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpreportComponent } from './grpreport.component';

describe('GrpreportComponent', () => {
  let component: GrpreportComponent;
  let fixture: ComponentFixture<GrpreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrpreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrpreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
