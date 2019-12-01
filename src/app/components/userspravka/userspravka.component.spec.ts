import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspravkaComponent } from './userspravka.component';

describe('UserspravkaComponent', () => {
  let component: UserspravkaComponent;
  let fixture: ComponentFixture<UserspravkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserspravkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspravkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
