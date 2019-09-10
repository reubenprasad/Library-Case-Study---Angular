import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdescComponent } from './authdesc.component';

describe('AuthdescComponent', () => {
  let component: AuthdescComponent;
  let fixture: ComponentFixture<AuthdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
