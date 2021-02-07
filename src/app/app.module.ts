import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {VerticalItemListComponent} from './vertical-item-list/vertical-item-list.component';
import {VerticalOptionListComponent} from './vertical-option-list/vertical-option-list.component';
import {InfoContentComponent} from './info-content/info-content.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    VerticalItemListComponent,
    VerticalOptionListComponent,
    InfoContentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
