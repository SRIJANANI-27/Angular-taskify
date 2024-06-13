import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndireportComponent } from './indireport.component';

describe('IndireportComponent', () => {
  let component: IndireportComponent;
  let fixture: ComponentFixture<IndireportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndireportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndireportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
