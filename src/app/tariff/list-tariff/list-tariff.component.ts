import { Component, TemplateRef, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tariff } from '../shared/tariff.model';
import { TariffService } from '../shared/tariff.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-list-tariff',
  templateUrl: './list-tariff.component.html',
  styleUrls: ['./list-tariff.component.sass'],
})
export class ListTariffComponent {
  public tariffs!: Tariff[]; // tariff list
  public filteredTariffs!: Tariff[]; // filtered tariff list
  speedUnit = "Mbit/s";

  //Break points
  handset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  tablet: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(map(result => result.matches));
  Web:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web).pipe(map(result => result.matches));
  @ViewChild('showBenefits', { static: true }) showBenefits!: TemplateRef<NgIfContext<boolean | null>>;

  //Filter selected values from dropdowns
  public filters = {
    selectedDownloadSpeed: undefined,
    selectedUploadSpeed: undefined,
    selectedCost: undefined,
  };

  // List columns
  displayedColumns: string[] = ['id', 'name', 'speed', 'benefits', 'cost'];

  constructor(private tariffService: TariffService, private breakpointObserver: BreakpointObserver) {
  this.speedUnit="Mbit/s"
  }

  ngOnInit(): void {
    // Get all tariffs
    this.getAllTariffs();
  }

  //Gets all the tariffs
  private getAllTariffs(): void {
    this.tariffService
      .getAll()
      .subscribe(
        (tariffs) => (
          (this.tariffs = tariffs), (this.filteredTariffs = tariffs)
        )
      );
  }

  public sortTariff(dropdownName: string): void {
    // No filter selected
    if (
      this.filters.selectedDownloadSpeed === undefined &&
      this.filters.selectedUploadSpeed === undefined &&
      this.filters.selectedCost === undefined
    )
      this.filteredTariffs = this.tariffs;
    // Select multiple rows based on all 3 filters
    else {
      this.filteredTariffs = this.tariffs.filter(
        (tariff) =>
          tariff.downloadSpeed == this.filters.selectedDownloadSpeed ||
          tariff.uploadSpeed == this.filters.selectedUploadSpeed ||
          tariff.cost == this.filters.selectedCost
      );
    }
  }
}
