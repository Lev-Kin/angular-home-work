import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // you api key  https://www.omdbapi.com/apikey.aspx
  // FREE! (1,000 daily limit)
  yourkey: string = 'fab4822f'; // 21.12.2022

  constructor(private http: HttpClient) { }

  getFilms(film: string, year: string) {
    if (year) {
      return this.http.get(
        `http://www.omdbapi.com/?s=${film}&y=${year}&apikey=${this.yourkey}`
      );
    }
    return this.http.get(
      `http://www.omdbapi.com/?s=${film}&apikey=${this.yourkey}`
    );
  }
  getShortInfo(id: string) {
    return this.http.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${this.yourkey}`
    );
  }
}
