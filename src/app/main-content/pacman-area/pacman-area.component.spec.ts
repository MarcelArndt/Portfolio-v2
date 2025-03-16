import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacmanAreaComponent } from './pacman-area.component';

describe('PacmanAreaComponent', () => {
  let component: PacmanAreaComponent;
  let fixture: ComponentFixture<PacmanAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacmanAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacmanAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
