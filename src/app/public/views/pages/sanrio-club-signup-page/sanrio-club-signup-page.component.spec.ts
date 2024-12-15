import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanrioClubSignupPageComponent } from './sanrio-club-signup-page.component';

describe('SanrioClubSignupPageComponent', () => {
  let component: SanrioClubSignupPageComponent;
  let fixture: ComponentFixture<SanrioClubSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanrioClubSignupPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanrioClubSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
