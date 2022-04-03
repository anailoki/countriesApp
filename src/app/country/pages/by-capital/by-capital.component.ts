import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  termino: string = '';
  errorExist: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.errorExist = false;
    this.termino = termino;

    this.countryService.searchCapital(termino)
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
