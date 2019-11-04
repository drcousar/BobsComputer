/*
============================================
; Title:  verify-questions.component.spec.ts
; Author: Professor Krasso
; Date:   3 November 2019
; Modified By: Jordan Hennessy
; Description: Bob's Computer
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyQuestionsComponent } from './verify-questions.component';

describe('VerifyQuestionsComponent', () => {
  let component: VerifyQuestionsComponent;
  let fixture: ComponentFixture<VerifyQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
