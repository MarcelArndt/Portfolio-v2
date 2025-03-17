import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilpictureComponent } from './profilpicture.component';

describe('ProfilpixtureComponent', () => {
  let component: ProfilpictureComponent;
  let fixture: ComponentFixture<ProfilpictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilpictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
