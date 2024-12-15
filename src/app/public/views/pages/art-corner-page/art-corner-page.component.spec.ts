import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCornerPageComponent } from './art-corner-page.component';

describe('ArtCornerPageComponent', () => {
  let component: ArtCornerPageComponent;
  let fixture: ComponentFixture<ArtCornerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtCornerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCornerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
