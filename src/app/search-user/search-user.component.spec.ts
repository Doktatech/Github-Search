import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcUserComponent } from './searc-user.component';

describe('SearcUserComponent', () => {
  let component: SearcUserComponent;
  let fixture: ComponentFixture<SearcUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
