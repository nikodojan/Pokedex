import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayControlsComponent } from './display-controls.component';

describe('DisplayControlsComponent', () => {
  let component: DisplayControlsComponent;
  let fixture: ComponentFixture<DisplayControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
