import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsecurityComponent } from './asecurity.component';

describe('AsecurityComponent', () => {
  let component: AsecurityComponent;
  let fixture: ComponentFixture<AsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
