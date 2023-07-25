import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDasnboardComponent } from './admin-dasnboard.component';

describe('AdminDasnboardComponent', () => {
  let component: AdminDasnboardComponent;
  let fixture: ComponentFixture<AdminDasnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDasnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDasnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
