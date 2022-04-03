import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
   `
  ]
})
export class ByCountryComponent {

  termino: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.errorExist = false;
    this.termino = termino;

    this.countryService.searchCountry(termino)
      .subscribe({
        next: (countries) => {
          this.countries = countries;


        },
        error: (err) => {
          this.errorExist = true;
          this.countries = [];

        }
      }
      )
  }

  suggestion(termino: string) {
    this.errorExist = false;
    this.termino = termino;
    this.showSuggestion = true;

    this.countryService.searchCountry(termino)
      .subscribe(countries => this.suggestedCountries = countries.splice(0, 5));
  }


  searchSuggestion(termino: string) {
    this.search(termino);
    this.showSuggestion = false;
  }


}
