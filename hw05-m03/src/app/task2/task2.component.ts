import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getSearchFilms, Search } from 'src/app/model/films';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  searchResult?: Observable<Array<getSearchFilms>> | any;

  mapFilmInfo = new Map();
  idFilm: string = '';
  isShowPlot = true;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  getFilms(obj: Search) {
    this.httpService.getFilms(obj.title, obj.year!).subscribe((data: any) => {
      this.searchResult = data.Search;

    });
  }

  getInfoFilm(id: string) {
    this.idFilm = id;
    if (!this.mapFilmInfo.has(id)) {
      this.httpService.getShortInfo(id).subscribe((data: any) => {
        this.mapFilmInfo.set(id, data);
      });
    }
  }
}
