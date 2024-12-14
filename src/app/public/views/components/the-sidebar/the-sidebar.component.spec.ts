import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSidebarComponent } from './the-sidebar.component';

describe('TheSidebarComponent', () => {
  let component: TheSidebarComponent;
  let fixture: ComponentFixture<TheSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
