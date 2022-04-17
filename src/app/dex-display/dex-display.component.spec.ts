import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexDisplayComponent } from './dex-display.component';

describe('DexDisplayComponent', () => {
  let component: DexDisplayComponent;
  let fixture: ComponentFixture<DexDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DexDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
