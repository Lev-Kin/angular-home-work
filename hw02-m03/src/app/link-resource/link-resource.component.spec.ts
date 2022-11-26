import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkResourceComponent } from './link-resource.component';

describe('LinkResourceComponent', () => {
  let component: LinkResourceComponent;
  let fixture: ComponentFixture<LinkResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
