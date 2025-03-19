import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightsComponent } from './spotlights.component';

describe('SpotlightsComponent', () => {
  let component: SpotlightsComponent;
  let fixture: ComponentFixture<SpotlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
