import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksUserslistComponent } from './works-userslist.component';

describe('WorksUserslistComponent', () => {
  let component: WorksUserslistComponent;
  let fixture: ComponentFixture<WorksUserslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksUserslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksUserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
