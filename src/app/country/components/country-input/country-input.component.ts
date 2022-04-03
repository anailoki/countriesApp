import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject;

  termino: string = '';

  constructor() { }


  // se dispara una unica vez cuando el compoenete ya este inicializado
  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)

      })
  }

  search() {

    this.onEnter.emit(this.termino);

  }

  keyPress(event: any) {
    // const value = event.target.value;
    // console.log(value);
    this.debouncer.next(this.termino);

  }

}
