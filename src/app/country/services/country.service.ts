import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
// import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flag,alpha2Code,population')
      ;
  }

  constructor(private http: HttpClient) { }

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // .pipe(
    //   catchError(err => of([])) // atrapa el error y retorna un array vacio
    // )
  }

  searchCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
