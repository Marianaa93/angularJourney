import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // ... outros componentes
  ],
  imports: [
    BrowserModule,
    // ... outros módulos
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
