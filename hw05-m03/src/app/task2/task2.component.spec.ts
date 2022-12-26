import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2Component } from './task2.component';

describe('Task2Component', () => {
  let component: Task2Component;
  let fixture: ComponentFixture<Task2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Task2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
