import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideaccordianComponent } from './sideaccordian.component';

describe('SideaccordianComponent', () => {
  let component: SideaccordianComponent;
  let fixture: ComponentFixture<SideaccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideaccordianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideaccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
