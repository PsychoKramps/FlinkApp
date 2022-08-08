import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRoutingComponent } from './header-routing.component';

describe('HeaderRoutingComponent', () => {
  let component: HeaderRoutingComponent;
  let fixture: ComponentFixture<HeaderRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
