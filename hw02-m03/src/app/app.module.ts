import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoExperienceWorkComponent } from './info-experience-work/info-experience-work.component';
import { InfoSkillComponent } from './info-skill/info-skill.component';
import { PhotoComponent } from './photo/photo.component';
import { LinkResourceComponent } from './link-resource/link-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoExperienceWorkComponent,
    InfoSkillComponent,
    PhotoComponent,
    LinkResourceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
