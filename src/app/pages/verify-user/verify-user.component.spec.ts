/*
============================================
; Title:  verify-user.component.spec.ts
; Author: Professor Krasso
; Date:   3 November 2019
; Modified By: Jordan Hennessy
; Description: Bob's Computer
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyUserComponent } from './verify-user.component';

describe('VerifyUserComponent', () => {
  let component: VerifyUserComponent;
  let fixture: ComponentFixture<VerifyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
