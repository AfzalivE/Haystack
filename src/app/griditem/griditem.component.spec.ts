import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriditemComponent } from './griditem.component';

describe('GriditemComponent', () => {
  let component: GriditemComponent;
  let fixture: ComponentFixture<GriditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
