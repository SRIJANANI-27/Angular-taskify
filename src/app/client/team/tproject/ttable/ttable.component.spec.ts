import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtableComponent } from './ttable.component';

describe('TtableComponent', () => {
  let component: TtableComponent;
  let fixture: ComponentFixture<TtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
