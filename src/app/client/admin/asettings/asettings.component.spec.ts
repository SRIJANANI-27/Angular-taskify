import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsettingsComponent } from './asettings.component';

describe('AsettingsComponent', () => {
  let component: AsettingsComponent;
  let fixture: ComponentFixture<AsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
