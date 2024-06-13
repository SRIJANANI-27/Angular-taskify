import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StikiesComponent } from './stikies.component';

describe('StikiesComponent', () => {
  let component: StikiesComponent;
  let fixture: ComponentFixture<StikiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StikiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StikiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
