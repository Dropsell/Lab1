import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  public forecasts: Person[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Person[]>(baseUrl + 'persons').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface Person
{
  name: string;
  surname: string;
  yearsOld: number;
}


