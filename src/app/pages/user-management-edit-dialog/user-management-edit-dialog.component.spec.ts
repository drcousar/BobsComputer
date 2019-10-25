/*
============================================
; Title:  Bob's Computer
; Author: Don Cousar
; Date:   23 October 2019
; Description: Bob's Computer
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementEditDialogComponent } from './user-management-edit-dialog.component';

describe('UserManagementEditDialogComponent', () => {
  let component: UserManagementEditDialogComponent;
  let fixture: ComponentFixture<UserManagementEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
