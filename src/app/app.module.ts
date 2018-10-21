import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpentdbService } from './shared/opentdb.service';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [AppComponent,  SearchFormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [OpentdbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
