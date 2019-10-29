/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   28 October 2019
; Description: Bob's Computer
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionsDeleteDialogComponent } from './security-questions-delete-dialog.component';

describe('SecurityQuestionsDeleteDialogComponent', () => {
  let component: SecurityQuestionsDeleteDialogComponent;
  let fixture: ComponentFixture<SecurityQuestionsDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityQuestionsDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
