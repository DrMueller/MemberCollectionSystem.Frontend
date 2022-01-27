import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from 'src/app/core/http';
import { MatDependenciesModule } from 'src/app/mat-deps';
import { BusyIndicationModule } from 'src/app/shared/busy-indication/busy-indication.module';
import { RxFormsModule } from 'src/app/shared/rx-forms';
import { AppInitService } from '../app-init/services';
import { AppNavigationModule } from '../app-navigation/app-navigation.module';
import { AppStateModule } from '../app-state/app-state.module';
import { ErrorHandlingModule } from '../error-handling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function initializeApp(appInitService: AppInitService): Function {
  return () => appInitService.initializeAppAsync();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatDependenciesModule,
    AppNavigationModule,
    AppRoutingModule,
    AppStateModule,
    BrowserModule,
    BrowserAnimationsModule,
    BusyIndicationModule,
    ErrorHandlingModule.forRoot(),
    HttpModule,
    HttpClientModule,
    RxFormsModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
