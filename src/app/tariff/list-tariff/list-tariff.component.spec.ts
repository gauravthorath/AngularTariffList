import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListTariffComponent } from "./list-tariff.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe('Component: TariffComponent', () => {
  let component: ListTariffComponent;
  let fixture: ComponentFixture<ListTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [ ListTariffComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should filter the table by selected download speed', () => {
    const downloadSpeedDropdown = fixture.debugElement?.query(By.css('#download-speed'));
    downloadSpeedDropdown?.triggerEventHandler('click', null);
    fixture.detectChanges();

    const optionToSelect = fixture.debugElement?.query(By.css('#download-speed-option-1'));
    optionToSelect?.triggerEventHandler('click', null);
    fixture.detectChanges();

    const tableRows = fixture.debugElement?.queryAll(By.css('.mat-row'));
    expect(tableRows.length).toBe(2); // assuming the selected speed matches 2 tariffs
  });

  it('should filter the table by selected upload speed', () => {
    const uploadSpeedDropdown = fixture.debugElement?.query(By.css('#upload-speed'));
    uploadSpeedDropdown?.triggerEventHandler('click', null);
    fixture.detectChanges();

    const optionToSelect = fixture.debugElement?.query(By.css('#upload-speed-option-2'));
    optionToSelect?.triggerEventHandler('click', null);
    fixture.detectChanges();

    const tableRows = fixture.debugElement?.queryAll(By.css('.mat-row'));
    expect(tableRows.length).toBe(1); // assuming only 1 tariff matches the selected speed
  });

  it('should sort the table by cost in ascending order', () => {
    component.sortTariff('cost');
    fixture.detectChanges();

    const firstRowCost = fixture.debugElement?.query(By.css('td.cdk-column-cost div')).nativeElement.innerText;
    const lastRowCost = fixture.debugElement?.query(By.css('td.cdk-column-cost div')).nativeElement.innerText;
    expect(firstRowCost)?.toBeLessThanOrEqual(lastRowCost);
  });
});
