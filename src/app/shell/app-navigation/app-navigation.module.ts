import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDependenciesModule } from 'src/app/mat-deps';

import { AppNavigationComponent } from './components/app-navigation';
import { AppToolbarComponent } from './components/app-toolbar';
import { AppNavigationEntryFactoryService } from './services';

@NgModule({
  declarations: [
    AppNavigationComponent,
    AppToolbarComponent
  ],
  exports: [
    AppNavigationComponent
  ],
  providers: [
    AppNavigationEntryFactoryService
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDependenciesModule
  ]
})
export class AppNavigationModule { }
