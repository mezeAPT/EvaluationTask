import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTwoComponent } from './grid-two.component';

describe('GridTwoComponent', () => {
  let component: GridTwoComponent;
  let fixture: ComponentFixture<GridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
