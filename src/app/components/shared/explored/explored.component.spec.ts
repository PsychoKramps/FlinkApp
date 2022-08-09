import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploredComponent } from './explored.component';

describe('ExploredComponent', () => {
  let component: ExploredComponent;
  let fixture: ComponentFixture<ExploredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
