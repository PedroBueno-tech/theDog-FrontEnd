import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent} from './menu/menu.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InitialPageComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
