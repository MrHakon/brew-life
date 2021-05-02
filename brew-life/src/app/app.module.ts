import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material design
import { MatIconModule } from '@angular/material/icon';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { MaltListComponent } from './malt/malt-list/malt-list.component';
import { MaltDetailsComponent } from './malt/malt-details/malt-details.component';
import { MaltEditComponent } from './malt/malt-edit/malt-edit.component';
import { MaltNewComponent } from './malt/malt-new/malt-new.component';
import { HopListComponent } from './hop/hop-list/hop-list.component';
import { HopDetailsComponent } from './hop/hop-details/hop-details.component';
import { HopNewComponent } from './hop/hop-new/hop-new.component';
import { HopEditComponent } from './hop/hop-edit/hop-edit.component';
import { YeastListComponent } from './yeast/yeast-list/yeast-list.component';
import { YeastDetailsComponent } from './yeast/yeast-details/yeast-details.component';
import { YeastNewComponent } from './yeast/yeast-new/yeast-new.component';
import { YeastEditComponent } from './yeast/yeast-edit/yeast-edit.component';
import { BrewListComponent } from './brew/brew-list/brew-list.component';
import { BrewDetailsComponent } from './brew/brew-details/brew-details.component';
import { BrewNewComponent } from './brew/brew-new/brew-new.component';
import { BrewEditComponent } from './brew/brew-edit/brew-edit.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeNewComponent,
    RecipeEditComponent,
    MaltListComponent,
    MaltDetailsComponent,
    MaltEditComponent,
    MaltNewComponent,
    HopListComponent,
    HopDetailsComponent,
    HopNewComponent,
    HopEditComponent,
    YeastListComponent,
    YeastDetailsComponent,
    YeastNewComponent,
    YeastEditComponent,
    BrewListComponent,
    BrewDetailsComponent,
    BrewNewComponent,
    BrewEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
