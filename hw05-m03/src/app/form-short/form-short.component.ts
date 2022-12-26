import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Search } from 'src/app/model/films';

@Component({
  selector: 'app-form-short',
  templateUrl: './form-short.component.html',
  styleUrls: ['./form-short.component.css']
})
export class FormShortComponent implements OnInit {

  @Output() searchFilm: EventEmitter<Search> = new EventEmitter<Search>()

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      const title = formData.title
      this.searchFilm.emit({ title })
    }
  }

} 