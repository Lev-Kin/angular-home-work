import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormShortComponent } from './form-short.component';

describe('FormShortComponent', () => {
  let component: FormShortComponent;
  let fixture: ComponentFixture<FormShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormShortComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
