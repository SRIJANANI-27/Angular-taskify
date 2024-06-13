import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpsComponent } from './grps.component';

describe('GrpsComponent', () => {
  let component: GrpsComponent;
  let fixture: ComponentFixture<GrpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
