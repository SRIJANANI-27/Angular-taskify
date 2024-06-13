import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionroomComponent } from './discussionroom.component';

describe('DiscussionroomComponent', () => {
  let component: DiscussionroomComponent;
  let fixture: ComponentFixture<DiscussionroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscussionroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
