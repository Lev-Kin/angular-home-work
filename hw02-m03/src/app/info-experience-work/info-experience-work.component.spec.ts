import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExperienceWorkComponent } from './info-experience-work.component';

describe('InfoExperienceWorkComponent', () => {
  let component: InfoExperienceWorkComponent;
  let fixture: ComponentFixture<InfoExperienceWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoExperienceWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoExperienceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
