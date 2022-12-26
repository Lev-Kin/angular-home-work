import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getSearchFilms, Search } from 'src/model/films';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  searchResult?: Observable<Array<getSearchFilms>> | any;
  mapFilmInfo = new Map();
  openModal: boolean = false;
  idFilm: string = '';

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
        this.openModal = true;
      });
    } else {
      this.openModal = true;
    }
  }
} 