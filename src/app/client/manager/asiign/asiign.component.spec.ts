import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiignComponent } from './asiign.component';

describe('AsiignComponent', () => {
  let component: AsiignComponent;
  let fixture: ComponentFixture<AsiignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsiignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsiignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
