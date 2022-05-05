import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddashComponent } from './fooddash.component';

describe('FooddashComponent', () => {
  let component: FooddashComponent;
  let fixture: ComponentFixture<FooddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooddashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
