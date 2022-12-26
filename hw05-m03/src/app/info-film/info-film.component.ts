import { Component, Input, OnInit, Output } from '@angular/core';
import { getShortInfo } from 'src/model/films';

@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrls: ['./info-film.component.css']
})
export class InfoFilmComponent implements OnInit {
  @Input() idFilm: string = '';
  @Input() filmsInfo!: Map<string, getShortInfo>;
  @Input() isShowPlot: Boolean = false;

  get film() {
    const film = this.filmsInfo.get(this.idFilm);
    return film;
  }

  constructor() { }

  ngOnInit(): void { }
} 
