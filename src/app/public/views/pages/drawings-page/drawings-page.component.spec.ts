import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingsPageComponent } from './drawings-page.component';

describe('DrawingsPageComponent', () => {
  let component: DrawingsPageComponent;
  let fixture: ComponentFixture<DrawingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawingsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
