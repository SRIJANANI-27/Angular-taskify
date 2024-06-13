import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualperformnaceComponent } from './individualperformnace.component';

describe('IndividualperformnaceComponent', () => {
  let component: IndividualperformnaceComponent;
  let fixture: ComponentFixture<IndividualperformnaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualperformnaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualperformnaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
