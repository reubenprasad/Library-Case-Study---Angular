import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdescComponent } from './bookdesc.component';

describe('BookdescComponent', () => {
  let component: BookdescComponent;
  let fixture: ComponentFixture<BookdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
