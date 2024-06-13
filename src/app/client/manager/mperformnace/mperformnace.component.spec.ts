import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MperformnaceComponent } from './mperformnace.component';

describe('MperformnaceComponent', () => {
  let component: MperformnaceComponent;
  let fixture: ComponentFixture<MperformnaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MperformnaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MperformnaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
