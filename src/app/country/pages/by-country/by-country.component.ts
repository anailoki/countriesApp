import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  termino: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];

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
  }


}
