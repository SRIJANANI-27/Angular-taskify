import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TteamComponent } from './tteam.component';

describe('TteamComponent', () => {
  let component: TteamComponent;
  let fixture: ComponentFixture<TteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
