import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MformComponent } from './mform.component';

describe('MformComponent', () => {
  let component: MformComponent;
  let fixture: ComponentFixture<MformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
