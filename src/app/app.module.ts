import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { CreatorComponent } from './creator/creator.component';
import { RouterModule, Routes } from '@angular/router';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreatorComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'creator', component: CreatorComponent},
      {path: 'overview', component: OverviewComponent},
      {path: 'models', component: ModelsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
