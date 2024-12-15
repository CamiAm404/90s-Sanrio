import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanrioClubPageComponent } from './sanrio-club-page.component';

describe('SanrioClubPageComponent', () => {
  let component: SanrioClubPageComponent;
  let fixture: ComponentFixture<SanrioClubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanrioClubPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanrioClubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
