import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusersComponent } from './ausers.component';

describe('AusersComponent', () => {
  let component: AusersComponent;
  let fixture: ComponentFixture<AusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
