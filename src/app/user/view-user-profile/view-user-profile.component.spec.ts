import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserComponent } from './view-user-profile.component';

describe('ViewUserProfileComponent', () => {
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
