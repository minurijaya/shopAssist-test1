import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedListPage } from './interested-list.page';

describe('InterestedListPage', () => {
  let component: InterestedListPage;
  let fixture: ComponentFixture<InterestedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
