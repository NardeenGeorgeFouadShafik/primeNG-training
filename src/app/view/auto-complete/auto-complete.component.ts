import { Component } from '@angular/core';
import { AutoCompleteEvent } from '../../models/auto-complete-event.model';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { GroupedCountryService } from '../../services/grouped-country.service';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-input-components',
  standalone: true,
  imports: [AutoCompleteModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss',
})
export class AutoCompleteComponent {
  items: any[] = [];
  selectedItem: any;
  suggestions: any[] = [];
  countries: { name: string; code: string }[] = [];
  formGroup: FormGroup;
  filteredCountries: any[] = [];
  filteredGroups: any[] = [];

  constructor(
    private countryService: CountryService,
    private filterService: FilterService,
    private groupedCountryService: GroupedCountryService
  ) {
    this.formGroup = new FormGroup({
      selectedCountry: new FormControl(''),
    });
  }

  search(event: AutoCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }
  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

  filterCountry(event: AutoCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  filterGroupedCity(event: AutoCompleteEvent) {
    let query = event.query;
    let filteredGroups = [];

    for (let optgroup of this.groupedCountryService.getGroupedCountries()) {
      let filteredSubOptions = this.filterService.filter(
        optgroup.items,
        ['label'],
        query,
        'contains'
      );
      console.log(filteredSubOptions);
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredGroups.push({
          label: optgroup.label,
          value: optgroup.value,
          items: filteredSubOptions,
        });
      }
    }

    this.filteredGroups = filteredGroups;
  }
}

