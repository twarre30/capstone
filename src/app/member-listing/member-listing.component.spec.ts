import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberListingComponent } from './member-listing.component';

describe('MemberListingComponent', () => {
  let component: MemberListingComponent;
  let fixture: ComponentFixture<MemberListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
