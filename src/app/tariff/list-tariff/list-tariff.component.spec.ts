import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTariffComponent } from './list-tariff.component';

describe('ListTariffComponent', () => {
  let component: ListTariffComponent;
  let fixture: ComponentFixture<ListTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTariffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
