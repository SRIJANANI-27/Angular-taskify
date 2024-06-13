import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TprojectComponent } from './tproject.component';

describe('TprojectComponent', () => {
  let component: TprojectComponent;
  let fixture: ComponentFixture<TprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
