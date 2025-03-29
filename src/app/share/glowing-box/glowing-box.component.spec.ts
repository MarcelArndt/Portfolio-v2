import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingBoxComponent } from './glowing-box.component';

describe('GlowingBoxComponent', () => {
  let component: GlowingBoxComponent;
  let fixture: ComponentFixture<GlowingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlowingBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlowingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
